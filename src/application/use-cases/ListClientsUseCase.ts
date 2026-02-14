import type { Client } from "../../domain/entities/Client";
import type { ClientRepository, ListClientsQuery } from "../../domain/repositories/ClientRepository";

export class ListClientsUseCase {
  constructor(private readonly clientRepository: ClientRepository) {}

  async execute(query?: ListClientsQuery): Promise<Client[]> {
    return this.clientRepository.list(query);
  }
}

