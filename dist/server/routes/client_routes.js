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
exports.client_routes = void 0;
const client_1 = require("../../services/class/client");
const server_1 = require("../server");
function client_routes() {
    const client = new client_1.Client();
    server_1.Server.routes().post('/client/inserts/create-account', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { firstname, lastname, email, phone, password } = req.body.data;
        const dbResponse = yield client.insert.create_account(firstname, lastname, email, phone, password);
        res.json(dbResponse);
    }));
    server_1.Server.routes().get('/client/selects/get-pizzas', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const dbResponse = yield client.selects.get_pizzas();
        res.json(dbResponse);
    }));
    server_1.Server.routes().get('/client/selects/get-pizza-cart/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const dbResponse = yield client.selects.get_pizza_cart(id);
        res.json(dbResponse);
    }));
    server_1.Server.routes().get('/client/selects/get-info-pizza/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const dbResponse = yield client.selects.get_info_pizza(id);
        res.json(dbResponse);
    }));
    server_1.Server.routes().post('/client/inserts/add-to-cart', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { clientID, quant, status, pizzaID } = req.body.data;
        const dbResponse = yield client.insert.add_to_cart(clientID, quant, status, pizzaID);
        res.json(dbResponse);
    }));
}
exports.client_routes = client_routes;
