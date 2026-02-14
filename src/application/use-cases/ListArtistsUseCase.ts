import type { Artist } from "../../domain/entities/Artist";
import type { ArtistRepository, ListArtistsQuery } from "../../domain/repositories/ArtistRepository";

export class ListArtistsUseCase {
  constructor(private readonly artistRepository: ArtistRepository) {}

  async execute(query?: ListArtistsQuery): Promise<Artist[]> {
    return this.artistRepository.list(query);
  }
}

