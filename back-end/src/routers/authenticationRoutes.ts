import { Router } from 'express';
import { registerUser, loginUser, forgotPassword, resetPassword } from '../controllers/authenticationCon';
import { verifyToken } from '../middlewares/authenticationMid';



const router = Router();



router.post('/register', registerUser);     //  /authentication/register
router.post('/login', loginUser);     //  /authentication/register
router.post('/forgot-password', verifyToken, forgotPassword);     //  /authentication/forgot-password
router.post('/reset-password/:token', verifyToken, resetPassword);     //  /authentication/reset-password/:token



export default router;