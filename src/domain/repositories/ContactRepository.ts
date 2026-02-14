import type { ContactMessage } from "../entities/ContactMessage";

export interface ContactRepository {
  create(message: ContactMessage): Promise<void>;
}

