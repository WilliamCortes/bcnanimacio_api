"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListServicesUseCase = void 0;
class ListServicesUseCase {
    serviceRepository;
    constructor(serviceRepository) {
        this.serviceRepository = serviceRepository;
    }
    async execute() {
        return this.serviceRepository.list();
    }
}
exports.ListServicesUseCase = ListServicesUseCase;
