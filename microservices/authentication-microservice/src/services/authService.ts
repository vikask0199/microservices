import bcrypt from "bcryptjs";
import { User } from "../models/User";
import accessDB from "../server";
import jwt from "jsonwebtoken";


export const authService = {
  signup: async (user: User): Promise<User | null> => {
    const userRepository = (await accessDB).getRepository(User);
    try {
      const existingUser = await userRepository.findOne({ where: { email: user.email } });
      if (existingUser) {
        throw new Error("User with this email already exists");
      }

      const hashedPassword = await bcrypt.hash(user.password, 10);
      const newUser = userRepository.create({
        userName: user.userName,
        email: user.email,
        password: hashedPassword,
      });
      await userRepository.save(newUser);

      return newUser;
    } catch (error) {
      console.error("Error during signup:", error);
      return null;
    }
  },

  login: async (email: string, password: string): Promise<string | null> => {
    const userRepository = (await accessDB).getRepository(User);
    try {
      const user = await userRepository.findOne({ where: { email } });
      if (!user) {
        throw new Error("User not found");
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: "1h" });

      return token;
    } catch (error) {
      console.error("Error during login:", error);
      return null;
    }
  },
};
