import type { Service } from "../../domain/entities/Service";
import type { ServiceRepository } from "../../domain/repositories/ServiceRepository";

export class ListServicesUseCase {
  constructor(private readonly serviceRepository: ServiceRepository) {}

  async execute(): Promise<Service[]> {
    return this.serviceRepository.list();
  }
}

