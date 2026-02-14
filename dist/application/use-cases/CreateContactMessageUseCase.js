"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContactMessageUseCase = void 0;
const crypto_1 = require("crypto");
class CreateContactMessageUseCase {
    contactRepository;
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    async execute(input) {
        const message = {
            id: (0, crypto_1.randomUUID)(),
            createdAt: new Date(),
            ...input,
        };
        await this.contactRepository.create(message);
        return message;
    }
}
exports.CreateContactMessageUseCase = CreateContactMessageUseCase;
