"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const AppError_1 = require("../../../interfaces/http/errors/AppError");
function errorHandler(err, _req, res, _next) {
    if (err instanceof AppError_1.AppError) {
        const payload = {
            success: false,
            error: {
                code: err.code,
                message: err.message,
                details: err.details,
            },
        };
        return res.status(err.statusCode).json(payload);
    }
    const payload = {
        success: false,
        error: {
            code: "INTERNAL_SERVER_ERROR",
            message: "Unexpected server error",
        },
    };
    return res.status(500).json(payload);
}
