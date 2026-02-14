"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactSchema = void 0;
const zod_1 = require("zod");
exports.contactSchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    email: zod_1.z.string().email(),
    phone: zod_1.z.string().optional(),
    company: zod_1.z.string().optional(),
    eventType: zod_1.z.enum(["corporate", "private", "wedding", "other"]),
    eventDate: zod_1.z.string().optional(),
    guests: zod_1.z.preprocess((value) => {
        if (value === "" || value === null || value === undefined)
            return undefined;
        const num = typeof value === "number" ? value : Number(value);
        return Number.isFinite(num) ? num : undefined;
    }, zod_1.z.number().int().positive().optional()),
    message: zod_1.z.string().min(10),
    language: zod_1.z.string().min(2),
});
