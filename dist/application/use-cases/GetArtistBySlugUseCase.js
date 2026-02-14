"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetArtistBySlugUseCase = void 0;
class GetArtistBySlugUseCase {
    artistRepository;
    constructor(artistRepository) {
        this.artistRepository = artistRepository;
    }
    async execute(slug) {
        return this.artistRepository.getBySlug(slug);
    }
}
exports.GetArtistBySlugUseCase = GetArtistBySlugUseCase;
