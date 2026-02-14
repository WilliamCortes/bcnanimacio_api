import type { ArtistRepository } from "../../domain/repositories/ArtistRepository";

export class ListArtistCategoriesUseCase {
  constructor(private readonly artistRepository: ArtistRepository) {}

  async execute(): Promise<string[]> {
    return this.artistRepository.listCategories();
  }
}

