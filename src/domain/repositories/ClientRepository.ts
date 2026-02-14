import type { Client } from "../entities/Client";

export type ListClientsQuery = {
  sector?: string;
};

export interface ClientRepository {
  list(query?: ListClientsQuery): Promise<Client[]>;
}

