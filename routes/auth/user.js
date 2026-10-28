import express from 'express';
import { Router } from 'express';
import { handleUserLogin, handleUserSignup } from '../../controllers/authControllers/user.js';

const authRouter = Router();

authRouter.post('/' , handleUserSignup );
authRouter.post("/login", handleUserLogin)
export default authRouter;     