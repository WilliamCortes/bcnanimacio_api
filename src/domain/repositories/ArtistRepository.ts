import type { Artist } from "../entities/Artist";

export type ListArtistsQuery = {
  featured?: boolean;
  category?: string;
};

export interface ArtistRepository {
  list(query?: ListArtistsQuery): Promise<Artist[]>;
  getBySlug(slug: string): Promise<Artist | null>;
  listCategories(): Promise<string[]>;
}

