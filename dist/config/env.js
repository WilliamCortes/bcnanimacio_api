"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function getNumber(value, fallback) {
    const parsed = value ? Number(value) : NaN;
    return Number.isFinite(parsed) ? parsed : fallback;
}
exports.env = {
    nodeEnv: process.env.NODE_ENV ?? "development",
    port: getNumber(process.env.PORT, 3001),
    corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:3000",
    rateLimitWindowMs: getNumber(process.env.RATE_LIMIT_WINDOW_MS, 15 * 60 * 1000),
    rateLimitMaxRequests: getNumber(process.env.RATE_LIMIT_MAX_REQUESTS, 100),
};
