export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  eventType: "corporate" | "private" | "wedding" | "other";
  eventDate?: string;
  guests?: number;
  message: string;
  language: string;
  createdAt: Date;
};

