import type { ContactMessage } from "../../domain/entities/ContactMessage";
import type { ContactRepository } from "../../domain/repositories/ContactRepository";

export class InMemoryContactRepository implements ContactRepository {
  private readonly items: ContactMessage[] = [];

  async create(message: ContactMessage): Promise<void> {
    this.items.push(message);
  }
}

