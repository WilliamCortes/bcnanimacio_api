import { Router, type Request, type Response } from "express";
import type { ListClientsUseCase } from "../../application/use-cases/ListClientsUseCase";
import type { ApiResponse } from "../../interfaces/http/ApiResponse";

export function createClientsRouter(deps: { listClients: ListClientsUseCase }) {
  const router = Router();

  router.get("/", async (req: Request, res: Response) => {
    const sector = typeof req.query.sector === "string" ? req.query.sector : undefined;
    const items = await deps.listClients.execute({ sector });
    const payload: ApiResponse<typeof items> = { success: true, data: items };
    res.json(payload);
  });

  return router;
}

