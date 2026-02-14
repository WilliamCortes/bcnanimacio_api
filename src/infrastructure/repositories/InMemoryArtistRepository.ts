import type { Artist } from "../../domain/entities/Artist";
import type { ArtistRepository, ListArtistsQuery } from "../../domain/repositories/ArtistRepository";

export class InMemoryArtistRepository implements ArtistRepository {
  constructor(private readonly items: Artist[]) {}

  async list(query?: ListArtistsQuery): Promise<Artist[]> {
    const filtered = this.items.filter((a) => a.isActive);

    return filtered.filter((a) => {
      if (query?.featured !== undefined && a.isFeatured !== query.featured) return false;
      if (query?.category && a.category !== query.category) return false;
      return true;
    });
  }

  async getBySlug(slug: string): Promise<Artist | null> {
    return this.items.find((a) => a.slug === slug && a.isActive) ?? null;
  }

  async listCategories(): Promise<string[]> {
    const categories = new Set(this.items.filter((a) => a.isActive).map((a) => a.category));
    return Array.from(categories).sort((a, b) => a.localeCompare(b));
  }
}

