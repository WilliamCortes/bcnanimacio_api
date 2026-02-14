"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryArtistRepository = void 0;
class InMemoryArtistRepository {
    items;
    constructor(items) {
        this.items = items;
    }
    async list(query) {
        const filtered = this.items.filter((a) => a.isActive);
        return filtered.filter((a) => {
            if (query?.featured !== undefined && a.isFeatured !== query.featured)
                return false;
            if (query?.category && a.category !== query.category)
                return false;
            return true;
        });
    }
    async getBySlug(slug) {
        return this.items.find((a) => a.slug === slug && a.isActive) ?? null;
    }
    async listCategories() {
        const categories = new Set(this.items.filter((a) => a.isActive).map((a) => a.category));
        return Array.from(categories).sort((a, b) => a.localeCompare(b));
    }
}
exports.InMemoryArtistRepository = InMemoryArtistRepository;
