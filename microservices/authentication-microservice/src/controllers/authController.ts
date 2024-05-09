import { Request, Response } from "express";
import { authService } from "../services/authService";
import { User } from "../models/User";
import { AuthResponse } from "../interfaces/authInterfaces";
import { SignupRequest } from "../interfaces/authInterfaces";
import { LoginRequest } from "../interfaces/authInterfaces";

export const signUpController = async (req: Request<{}, {}, SignupRequest>, res: Response<AuthResponse>) => {
    try {
        const newUser = await authService.signup(req.body as User);
        if (!newUser) {
            return res.status(400).json({ success: false, message: "Signup failed" });
        }
        res.json({ success: true, message: "User registered successfully" });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const loginController = async (req: Request<{}, {}, LoginRequest>, res: Response<AuthResponse>) => {
    try {
        const token = await authService.login(req.body.email, req.body.password);
        if (!token) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }
        res.json({ success: true, token, message: "Login successfully . . ." });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
