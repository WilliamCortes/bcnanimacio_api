import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  eventType: z.enum(["corporate", "private", "wedding", "other"]),
  eventDate: z.string().optional(),
  guests: z.preprocess(
    (value) => {
      if (value === "" || value === null || value === undefined) return undefined;
      const num = typeof value === "number" ? value : Number(value);
      return Number.isFinite(num) ? num : undefined;
    },
    z.number().int().positive().optional()
  ),
  message: z.string().min(10),
  language: z.string().min(2),
});

export type ContactBody = z.infer<typeof contactSchema>;

