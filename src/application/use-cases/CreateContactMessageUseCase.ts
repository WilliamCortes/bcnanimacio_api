import { randomUUID } from "crypto";
import type { ContactMessage } from "../../domain/entities/ContactMessage";
import type { ContactRepository } from "../../domain/repositories/ContactRepository";

export type CreateContactMessageInput = Omit<ContactMessage, "id" | "createdAt">;

export class CreateContactMessageUseCase {
  constructor(private readonly contactRepository: ContactRepository) {}

  async execute(input: CreateContactMessageInput): Promise<ContactMessage> {
    const message: ContactMessage = {
      id: randomUUID(),
      createdAt: new Date(),
      ...input,
    };

    await this.contactRepository.create(message);
    return message;
  }
}

