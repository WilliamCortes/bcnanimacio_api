"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createArtistsRouter = createArtistsRouter;
const express_1 = require("express");
const AppError_1 = require("../../interfaces/http/errors/AppError");
function createArtistsRouter(deps) {
    const router = (0, express_1.Router)();
    router.get("/", async (req, res) => {
        const featured = req.query.featured === "true" ? true : req.query.featured === "false" ? false : undefined;
        const category = typeof req.query.category === "string" ? req.query.category : undefined;
        const items = await deps.listArtists.execute({ featured, category });
        const payload = { success: true, data: items };
        res.json(payload);
    });
    router.get("/categories", async (_req, res) => {
        const categories = await deps.listCategories.execute();
        const payload = { success: true, data: categories };
        res.json(payload);
    });
    router.get("/:slug", async (req, res) => {
        const slug = Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug;
        const artist = await deps.getArtistBySlug.execute(slug);
        if (!artist)
            throw new AppError_1.AppError("NOT_FOUND", "Artist not found", 404);
        const payload = { success: true, data: artist };
        res.json(payload);
    });
    return router;
}
