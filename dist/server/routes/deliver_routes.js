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
exports.deliver_routes = void 0;
const deliver_1 = require("../../services/class/deliver");
const server_1 = require("../server");
function deliver_routes() {
    const deliver = new deliver_1.Deliver();
    server_1.Server.routes().put('/deliver/update-account', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { id, username, password } = req.body.data;
        const dbResponse = yield deliver.update.account(id, username, password);
        res.json(dbResponse);
    }));
    server_1.Server.routes().put('/deliver/update-location', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { id, lat, lon } = req.body.data;
        const dbResponse = yield deliver.update.location(id, lat, lon);
        res.json(dbResponse);
    }));
}
exports.deliver_routes = deliver_routes;
