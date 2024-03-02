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
    server_1.Server.routes().post('/deliver/selects/get-account', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { id, username, password } = req.body;
        const dbResponse = yield deliver.update.account(id, username, password);
        console.log(dbResponse);
        res.json(dbResponse);
    }));
    server_1.Server.routes().post('/deliver/selects/request-account', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { email } = req.body;
        console.log(req);
        const dbResponse = yield deliver.selects.request_account(email);
        console.log(dbResponse);
        res.json(dbResponse);
    }));
    server_1.Server.routes().post('/deliver/updates/update-account', (req, res) => __awaiter(this, void 0, void 0, function* () {
        console.log(req);
        const { id, username, password } = req.body;
        const dbResponse = yield deliver.update.account(id, username, password);
        console.log(dbResponse);
        res.json(dbResponse);
    }));
    server_1.Server.routes().put('/deliver/updates/update-location/:id/:latitude/:longitude', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { id, latitude, longitude } = req.params;
        console.log(req.params);
        const dbResponse = yield deliver.update.location(id, Number(latitude), Number(longitude));
        console.log(dbResponse);
        res.json(dbResponse);
    }));
    server_1.Server.routes().get('/deliver/inserts/set-location/:id/:latitude/:longitude', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { id, latitude, longitude } = req.params;
        console.log(req.params);
        const dbResponse = yield deliver.inserts.set_deliver_location(id, latitude, longitude);
        console.log(dbResponse);
        res.json(dbResponse);
    }));
    server_1.Server.routes().get('/deliver/selects/get-stores-positions', (req, res) => __awaiter(this, void 0, void 0, function* () {
        console.log(req);
        const dbResponse = yield deliver.selects.get_stores();
        console.log(dbResponse.data);
        res.json(dbResponse);
    }));
}
exports.deliver_routes = deliver_routes;
