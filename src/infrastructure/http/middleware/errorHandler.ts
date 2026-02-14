import type { NextFunction, Request, Response } from "express";
import { AppError } from "../../../interfaces/http/errors/AppError";
import type { ApiErrorResponse } from "../../../interfaces/http/ApiResponse";

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof AppError) {
    const payload: ApiErrorResponse = {
      success: false,
      error: {
        code: err.code,
        message: err.message,
        details: err.details,
      },
    };

    return res.status(err.statusCode).json(payload);
  }

  const payload: ApiErrorResponse = {
    success: false,
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "Unexpected server error",
    },
  };

  return res.status(500).json(payload);
}

