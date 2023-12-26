"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin_routes = void 0;
const admin_1 = require("../../services/class/admin");
const server_1 = require("../server");
function admin_routes() {
    const admin = new admin_1.Admin;
    server_1.Server.routes().post('/admin/inserts/create-account', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { name, email, phone, password } = req.body.data;
        const dbResponse = yield admin.inserts.create_account(name, email, phone, password);
        res.json(dbResponse);
    }));
    server_1.Server.routes().post('/admin/inserts/create-deliver-account', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { id, infoCar } = req.body.data;
        console.log(req.body.data);
        const dbResponse = yield admin.inserts.create_deliver_account(id, infoCar.board, infoCar.photo, infoCar.color, infoCar.name, infoCar.model);
        res.json(dbResponse);
    }));
    server_1.Server.routes().post('/admin/inserts/create-pizza-category', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { name } = req.body.data;
        const dbResponse = yield admin.inserts.create_pizza_category(name);
        res.json(dbResponse);
    }));
    server_1.Server.routes().post('/admin/inserts/create-pizza', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { name, photo, price, status, category, igredients } = req.body.data;
        const dbResponse = yield admin.inserts.create_pizza(name, photo, price, status, category, igredients);
        res.json(dbResponse);
    }));
}
exports.admin_routes = admin_routes;