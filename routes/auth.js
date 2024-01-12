import { Router } from "express";
import authController from '../controllers/authController.js'
import { auth } from "../middleware/auth.js";

export const router = Router()

router.post('/signup', authController.signup)
router.post('/login', authController.login)
router.get('/user', auth, authController.get_user)
