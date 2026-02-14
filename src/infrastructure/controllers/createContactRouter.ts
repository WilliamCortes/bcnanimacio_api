import { Router, type Request, type Response } from "express";
import type { CreateContactMessageUseCase } from "../../application/use-cases/CreateContactMessageUseCase";
import type { ApiResponse } from "../../interfaces/http/ApiResponse";
import { contactSchema } from "../../interfaces/http/validators/contactSchema";
import { AppError } from "../../interfaces/http/errors/AppError";

export function createContactRouter(deps: { createContactMessage: CreateContactMessageUseCase }) {
  const router = Router();

  router.post("/", async (req: Request, res: Response) => {
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) {
      const details: Record<string, string[]> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path.join(".") || "body";
        details[key] = details[key] ?? [];
        details[key].push(issue.message);
      }
      throw new AppError("VALIDATION_ERROR", "Invalid request body", 400, details);
    }

    const message = await deps.createContactMessage.execute(parsed.data);
    const payload: ApiResponse<{ id: string }> = { success: true, data: { id: message.id } };
    res.status(201).json(payload);
  });

  return router;
}

