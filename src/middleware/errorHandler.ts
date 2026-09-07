import { Request, Response, NextFunction } from 'express';
import { config } from '../config';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  
  res.json({
    message: err.message,
    stack: config.nodeEnv === 'production' ? '🥞' : err.stack,
  });
};
