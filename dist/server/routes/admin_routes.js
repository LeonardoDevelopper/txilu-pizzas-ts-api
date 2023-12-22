"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin_routes = void 0;
const admin_1 = require("../../services/class/admin");
const server_1 = require("../server");
function admin_routes() {
    const admin2 = new admin_1.Admin;
    admin2.inserts.create_account("admin", "SADSAD", 8238, "dasiudasyd");
    server_1.Server.routes().get('/', (req, res) => {
        res.json({ success: "Hello Word" });
    });
    server_1.Server.routes().get('/any', (req, res) => {
        res.json({ success: "HAhHahHahHahHahHahH" });
    });
}
exports.admin_routes = admin_routes;
