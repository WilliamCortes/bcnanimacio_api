import type { Artist } from "../../domain/entities/Artist";
import type { ArtistRepository } from "../../domain/repositories/ArtistRepository";

export class GetArtistBySlugUseCase {
  constructor(private readonly artistRepository: ArtistRepository) {}

  async execute(slug: string): Promise<Artist | null> {
    return this.artistRepository.getBySlug(slug);
  }
}

