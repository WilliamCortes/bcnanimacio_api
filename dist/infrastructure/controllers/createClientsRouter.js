"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientsRouter = createClientsRouter;
const express_1 = require("express");
function createClientsRouter(deps) {
    const router = (0, express_1.Router)();
    router.get("/", async (req, res) => {
        const sector = typeof req.query.sector === "string" ? req.query.sector : undefined;
        const items = await deps.listClients.execute({ sector });
        const payload = { success: true, data: items };
        res.json(payload);
    });
    return router;
}
