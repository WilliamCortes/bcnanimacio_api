"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContactRouter = createContactRouter;
const express_1 = require("express");
const contactSchema_1 = require("../../interfaces/http/validators/contactSchema");
const AppError_1 = require("../../interfaces/http/errors/AppError");
function createContactRouter(deps) {
    const router = (0, express_1.Router)();
    router.post("/", async (req, res) => {
        const parsed = contactSchema_1.contactSchema.safeParse(req.body);
        if (!parsed.success) {
            const details = {};
            for (const issue of parsed.error.issues) {
                const key = issue.path.join(".") || "body";
                details[key] = details[key] ?? [];
                details[key].push(issue.message);
            }
            throw new AppError_1.AppError("VALIDATION_ERROR", "Invalid request body", 400, details);
        }
        const message = await deps.createContactMessage.execute(parsed.data);
        const payload = { success: true, data: { id: message.id } };
        res.status(201).json(payload);
    });
    return router;
}
