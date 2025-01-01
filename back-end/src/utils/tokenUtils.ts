import jwt from 'jsonwebtoken';
import { IUser } from '../models/User';
import dotenv from 'dotenv';

dotenv.config();

const accessTokenSecret = process.env.JWT_ACCESS_SECRET_KEY as string;
const refreshTokenSecret = process.env.JWT_REFRESH_SECRET_KEY as string;

export const generateAccessToken = (user: IUser) => {
  return jwt.sign({ id: user._id, email: user.email }, accessTokenSecret, { expiresIn: '15m' });
};

export const generateRefreshToken = (user: IUser) => {
  return jwt.sign({ id: user._id, email: user.email }, refreshTokenSecret, { expiresIn: '7d' });
};
