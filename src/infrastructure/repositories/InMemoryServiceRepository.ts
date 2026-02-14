import type { Service } from "../../domain/entities/Service";
import type { ServiceRepository } from "../../domain/repositories/ServiceRepository";

export class InMemoryServiceRepository implements ServiceRepository {
  constructor(private readonly items: Service[]) {}

  async list(): Promise<Service[]> {
    return this.items.filter((s) => s.isActive);
  }
}

