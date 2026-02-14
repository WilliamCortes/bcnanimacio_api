"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryContactRepository = void 0;
class InMemoryContactRepository {
    items = [];
    async create(message) {
        this.items.push(message);
    }
}
exports.InMemoryContactRepository = InMemoryContactRepository;
