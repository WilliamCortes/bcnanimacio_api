"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryServiceRepository = void 0;
class InMemoryServiceRepository {
    items;
    constructor(items) {
        this.items = items;
    }
    async list() {
        return this.items.filter((s) => s.isActive);
    }
}
exports.InMemoryServiceRepository = InMemoryServiceRepository;
