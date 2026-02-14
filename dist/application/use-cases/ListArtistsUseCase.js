"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListArtistsUseCase = void 0;
class ListArtistsUseCase {
    artistRepository;
    constructor(artistRepository) {
        this.artistRepository = artistRepository;
    }
    async execute(query) {
        return this.artistRepository.list(query);
    }
}
exports.ListArtistsUseCase = ListArtistsUseCase;
