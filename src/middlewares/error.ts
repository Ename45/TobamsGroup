import { NextFunction, Request, Response } from "express";

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  return res.status(statusCode).json({
    success: false,
    error: error.message
  })
}


export {
  errorHandler
}