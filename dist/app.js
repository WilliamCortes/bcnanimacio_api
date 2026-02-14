"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const env_1 = require("./config/env");
const seedData_1 = require("./infrastructure/data/seedData");
const InMemoryArtistRepository_1 = require("./infrastructure/repositories/InMemoryArtistRepository");
const InMemoryClientRepository_1 = require("./infrastructure/repositories/InMemoryClientRepository");
const InMemoryServiceRepository_1 = require("./infrastructure/repositories/InMemoryServiceRepository");
const InMemoryContactRepository_1 = require("./infrastructure/repositories/InMemoryContactRepository");
const ListArtistsUseCase_1 = require("./application/use-cases/ListArtistsUseCase");
const GetArtistBySlugUseCase_1 = require("./application/use-cases/GetArtistBySlugUseCase");
const ListArtistCategoriesUseCase_1 = require("./application/use-cases/ListArtistCategoriesUseCase");
const ListClientsUseCase_1 = require("./application/use-cases/ListClientsUseCase");
const ListServicesUseCase_1 = require("./application/use-cases/ListServicesUseCase");
const CreateContactMessageUseCase_1 = require("./application/use-cases/CreateContactMessageUseCase");
const createArtistsRouter_1 = require("./infrastructure/controllers/createArtistsRouter");
const createClientsRouter_1 = require("./infrastructure/controllers/createClientsRouter");
const createServicesRouter_1 = require("./infrastructure/controllers/createServicesRouter");
const createContactRouter_1 = require("./infrastructure/controllers/createContactRouter");
const errorHandler_1 = require("./infrastructure/http/middleware/errorHandler");
function createApp() {
    const app = (0, express_1.default)();
    app.use((0, helmet_1.default)());
    app.use((0, cors_1.default)({
        origin: env_1.env.corsOrigin,
    }));
    app.use(express_1.default.json({ limit: "256kb" }));
    const limiter = (0, express_rate_limit_1.default)({
        windowMs: env_1.env.rateLimitWindowMs,
        limit: env_1.env.rateLimitMaxRequests,
        standardHeaders: "draft-8",
        legacyHeaders: false,
    });
    app.use(limiter);
    const artistRepository = new InMemoryArtistRepository_1.InMemoryArtistRepository(seedData_1.seedArtists);
    const clientRepository = new InMemoryClientRepository_1.InMemoryClientRepository(seedData_1.seedClients);
    const serviceRepository = new InMemoryServiceRepository_1.InMemoryServiceRepository(seedData_1.seedServices);
    const contactRepository = new InMemoryContactRepository_1.InMemoryContactRepository();
    const listArtists = new ListArtistsUseCase_1.ListArtistsUseCase(artistRepository);
    const getArtistBySlug = new GetArtistBySlugUseCase_1.GetArtistBySlugUseCase(artistRepository);
    const listCategories = new ListArtistCategoriesUseCase_1.ListArtistCategoriesUseCase(artistRepository);
    const listClients = new ListClientsUseCase_1.ListClientsUseCase(clientRepository);
    const listServices = new ListServicesUseCase_1.ListServicesUseCase(serviceRepository);
    const createContactMessage = new CreateContactMessageUseCase_1.CreateContactMessageUseCase(contactRepository);
    const api = express_1.default.Router();
    api.get("/health", (_req, res) => res.json({ ok: true }));
    api.use("/artists", (0, createArtistsRouter_1.createArtistsRouter)({ listArtists, getArtistBySlug, listCategories }));
    api.use("/clients", (0, createClientsRouter_1.createClientsRouter)({ listClients }));
    api.use("/services", (0, createServicesRouter_1.createServicesRouter)({ listServices }));
    api.use("/contact", (0, createContactRouter_1.createContactRouter)({ createContactMessage }));
    app.use("/api/v1", api);
    app.use(errorHandler_1.errorHandler);
    return app;
}
