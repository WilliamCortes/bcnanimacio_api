import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { env } from "./config/env";
import { seedArtists, seedClients, seedServices } from "./infrastructure/data/seedData";
import { InMemoryArtistRepository } from "./infrastructure/repositories/InMemoryArtistRepository";
import { InMemoryClientRepository } from "./infrastructure/repositories/InMemoryClientRepository";
import { InMemoryServiceRepository } from "./infrastructure/repositories/InMemoryServiceRepository";
import { InMemoryContactRepository } from "./infrastructure/repositories/InMemoryContactRepository";
import { ListArtistsUseCase } from "./application/use-cases/ListArtistsUseCase";
import { GetArtistBySlugUseCase } from "./application/use-cases/GetArtistBySlugUseCase";
import { ListArtistCategoriesUseCase } from "./application/use-cases/ListArtistCategoriesUseCase";
import { ListClientsUseCase } from "./application/use-cases/ListClientsUseCase";
import { ListServicesUseCase } from "./application/use-cases/ListServicesUseCase";
import { CreateContactMessageUseCase } from "./application/use-cases/CreateContactMessageUseCase";
import { createArtistsRouter } from "./infrastructure/controllers/createArtistsRouter";
import { createClientsRouter } from "./infrastructure/controllers/createClientsRouter";
import { createServicesRouter } from "./infrastructure/controllers/createServicesRouter";
import { createContactRouter } from "./infrastructure/controllers/createContactRouter";
import { errorHandler } from "./infrastructure/http/middleware/errorHandler";

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(
    cors({
      origin: env.corsOrigin,
    })
  );
  app.use(express.json({ limit: "256kb" }));

  const limiter = rateLimit({
    windowMs: env.rateLimitWindowMs,
    limit: env.rateLimitMaxRequests,
    standardHeaders: "draft-8",
    legacyHeaders: false,
  });
  app.use(limiter);

  const artistRepository = new InMemoryArtistRepository(seedArtists);
  const clientRepository = new InMemoryClientRepository(seedClients);
  const serviceRepository = new InMemoryServiceRepository(seedServices);
  const contactRepository = new InMemoryContactRepository();

  const listArtists = new ListArtistsUseCase(artistRepository);
  const getArtistBySlug = new GetArtistBySlugUseCase(artistRepository);
  const listCategories = new ListArtistCategoriesUseCase(artistRepository);
  const listClients = new ListClientsUseCase(clientRepository);
  const listServices = new ListServicesUseCase(serviceRepository);
  const createContactMessage = new CreateContactMessageUseCase(contactRepository);

  const api = express.Router();
  api.get("/health", (_req, res) => res.json({ ok: true }));
  api.use("/artists", createArtistsRouter({ listArtists, getArtistBySlug, listCategories }));
  api.use("/clients", createClientsRouter({ listClients }));
  api.use("/services", createServicesRouter({ listServices }));
  api.use("/contact", createContactRouter({ createContactMessage }));

  app.use("/api/v1", api);
  app.use(errorHandler);

  return app;
}

