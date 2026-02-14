"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClientsUseCase = void 0;
class ListClientsUseCase {
    clientRepository;
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    async execute(query) {
        return this.clientRepository.list(query);
    }
}
exports.ListClientsUseCase = ListClientsUseCase;
