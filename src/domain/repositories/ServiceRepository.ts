import type { Service } from "../entities/Service";

export interface ServiceRepository {
  list(): Promise<Service[]>;
}

