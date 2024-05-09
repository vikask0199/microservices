import express from 'express';
import { loginController, signUpController } from '../controllers/authController';

const router = express.Router();

router.post("/api/v1/signup", signUpController)
router.post("/api/v1/login", loginController)


export default router