"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListArtistCategoriesUseCase = void 0;
class ListArtistCategoriesUseCase {
    artistRepository;
    constructor(artistRepository) {
        this.artistRepository = artistRepository;
    }
    async execute() {
        return this.artistRepository.listCategories();
    }
}
exports.ListArtistCategoriesUseCase = ListArtistCategoriesUseCase;
