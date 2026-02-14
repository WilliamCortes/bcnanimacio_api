import { Router, type Request, type Response } from "express";
import type { ListArtistsUseCase } from "../../application/use-cases/ListArtistsUseCase";
import type { GetArtistBySlugUseCase } from "../../application/use-cases/GetArtistBySlugUseCase";
import type { ListArtistCategoriesUseCase } from "../../application/use-cases/ListArtistCategoriesUseCase";
import type { ApiResponse } from "../../interfaces/http/ApiResponse";
import { AppError } from "../../interfaces/http/errors/AppError";

export function createArtistsRouter(deps: {
  listArtists: ListArtistsUseCase;
  getArtistBySlug: GetArtistBySlugUseCase;
  listCategories: ListArtistCategoriesUseCase;
}) {
  const router = Router();

  router.get("/", async (req: Request, res: Response) => {
    const featured = req.query.featured === "true" ? true : req.query.featured === "false" ? false : undefined;
    const category = typeof req.query.category === "string" ? req.query.category : undefined;

    const items = await deps.listArtists.execute({ featured, category });
    const payload: ApiResponse<typeof items> = { success: true, data: items };
    res.json(payload);
  });

  router.get("/categories", async (_req: Request, res: Response) => {
    const categories = await deps.listCategories.execute();
    const payload: ApiResponse<typeof categories> = { success: true, data: categories };
    res.json(payload);
  });

  router.get("/:slug", async (req: Request, res: Response) => {
    const slug = Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug;
    const artist = await deps.getArtistBySlug.execute(slug);
    if (!artist) throw new AppError("NOT_FOUND", "Artist not found", 404);
    const payload: ApiResponse<typeof artist> = { success: true, data: artist };
    res.json(payload);
  });

  return router;
}

