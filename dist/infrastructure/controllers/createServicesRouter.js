"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServicesRouter = createServicesRouter;
const express_1 = require("express");
function createServicesRouter(deps) {
    const router = (0, express_1.Router)();
    router.get("/", async (_req, res) => {
        const items = await deps.listServices.execute();
        const payload = { success: true, data: items };
        res.json(payload);
    });
    return router;
}
