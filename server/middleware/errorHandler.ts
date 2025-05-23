
import { Request, Response, NextFunction } from 'express';

export interface ApiError extends Error {
  status?: number;
  statusCode?: number;
}

export const errorHandler = (
  err: ApiError, 
  _req: Request, 
  res: Response, 
  _next: NextFunction
) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  
  console.error(`Error [${status}]: ${message}`);
  if (status === 500) {
    console.error(err.stack);
  }

  res.status(status).json({ 
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' ? { stack: err.stack } : {})
  });
};
