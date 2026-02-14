"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryClientRepository = void 0;
class InMemoryClientRepository {
    items;
    constructor(items) {
        this.items = items;
    }
    async list(query) {
        return this.items
            .filter((c) => c.isActive)
            .filter((c) => {
            if (query?.sector && c.sector !== query.sector)
                return false;
            return true;
        });
    }
}
exports.InMemoryClientRepository = InMemoryClientRepository;
