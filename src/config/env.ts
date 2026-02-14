import dotenv from "dotenv";

dotenv.config();

function getNumber(value: string | undefined, fallback: number): number {
  const parsed = value ? Number(value) : NaN;
  return Number.isFinite(parsed) ? parsed : fallback;
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: getNumber(process.env.PORT, 3001),
  corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:3000",
  rateLimitWindowMs: getNumber(process.env.RATE_LIMIT_WINDOW_MS, 15 * 60 * 1000),
  rateLimitMaxRequests: getNumber(process.env.RATE_LIMIT_MAX_REQUESTS, 100),
};

