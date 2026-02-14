import type { Client } from "../../domain/entities/Client";
import type { ClientRepository, ListClientsQuery } from "../../domain/repositories/ClientRepository";

export class InMemoryClientRepository implements ClientRepository {
  constructor(private readonly items: Client[]) {}

  async list(query?: ListClientsQuery): Promise<Client[]> {
    return this.items
      .filter((c) => c.isActive)
      .filter((c) => {
        if (query?.sector && c.sector !== query.sector) return false;
        return true;
      });
  }
}

