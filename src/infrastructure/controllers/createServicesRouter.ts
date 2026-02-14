import { Router, type Request, type Response } from "express";
import type { ListServicesUseCase } from "../../application/use-cases/ListServicesUseCase";
import type { ApiResponse } from "../../interfaces/http/ApiResponse";

export function createServicesRouter(deps: { listServices: ListServicesUseCase }) {
  const router = Router();

  router.get("/", async (_req: Request, res: Response) => {
    const items = await deps.listServices.execute();
    const payload: ApiResponse<typeof items> = { success: true, data: items };
    res.json(payload);
  });

  return router;
}

