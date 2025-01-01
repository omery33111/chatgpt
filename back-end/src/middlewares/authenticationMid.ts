import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IUser } from '../models/User';

interface AuthRequest extends Request {
  user?: IUser;
}

export const verifyToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.headers.cookie) {
      const token = req.headers.cookie.split('=')[1]
      if (!token) {
        res.status(401).send('Unauthorized');
        return;
      }
  
      const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET_KEY as string) as IUser;
      req.user = decoded;
      return next();
    }
    res.status(401).send('Unauthorized');
};
