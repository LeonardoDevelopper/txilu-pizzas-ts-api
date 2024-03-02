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
const paypal_1 = require("../api/paypal");
function client_routes() {
    const payment = new paypal_1.Payment();
    const client = new client_1.Client();
    server_1.Server.routes().post('/client/inserts/create-account', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { email, phone, password } = req.body;
        const dbResponse = yield client.insert.create_account(email, phone, password);
        res.json(dbResponse);
    }));
    server_1.Server.routes().get('/client/selects/get-pizzas', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const dbResponse = yield client.selects.get_pizzas();
        console.log(dbResponse);
        res.json(dbResponse);
    }));
    server_1.Server.routes().post('/client/selects/get-account', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { any, password } = req.body;
        console.log(req.body);
        const dbResponse = yield client.selects.getAccount(any, password);
        console.log(dbResponse);
        res.json(dbResponse);
    }));
    server_1.Server.routes().get('/client/selects/count-cart/:clientId', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { clientId } = req.params;
        const dbResponse = yield client.selects.count_cart(clientId);
        res.json(dbResponse);
    }));
    server_1.Server.routes().get('/client/selects/get-cart/:clientId', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { clientId } = req.params;
        console.log(req.params);
        const dbResponse = yield client.selects.get_cart(clientId);
        console.log(dbResponse);
        res.json(dbResponse);
    }));
    server_1.Server.routes().get('/client/selects/get-info-pizza/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        console.log(req);
        const dbResponse = yield client.selects.get_info_pizza(id);
        res.json(dbResponse);
    }));
    server_1.Server.routes().get('/client/inserts/add-to-cart/:clientId/:pizzaId', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { clientId, pizzaId } = req.params;
        console.log(req.params);
        const dbResponse = yield client.insert.add_to_cart(clientId, pizzaId);
        console.log(dbResponse);
        res.json(dbResponse);
    }));
    server_1.Server.routes().delete('/client/deletes/product-from-cart/:id/:clientId', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { id, clientId } = req.params;
        console.log(req.params);
        const dbResponse = yield client.deletes.delete_from_cart(id, clientId);
        console.log(dbResponse);
        res.json(dbResponse);
    }));
    server_1.Server.routes().post('/client/inserts/payment', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { items, total, ORDERID } = req.body;
        console.log(req.body);
        //inserir as pizzas aos itens do pedido.
        console.log(yield client.insert.add_order_items(items, ORDERID));
        const response = yield payment.pay(items, total, ORDERID)
            .then((result) => result)
            .catch((error) => console.log(error));
        res.json(response);
    }));
    server_1.Server.routes().get('/success/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        //Salvar pagamento na DB
        console.log(req.params);
        const dbResponse = yield client.update.update_order_status(id);
        if (dbResponse.OK)
            res.render('success.ejs');
        else
            res.send("<h2>Ocorreu algum erro durante o pagamento...</h2>");
    }));
    server_1.Server.routes().get('/cancel', (req, res) => {
        res.render('cancel.ejs');
    });
    server_1.Server.routes().post('/client/inserts/send-order', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { coords, distance, time, status, CLIENTID } = req.body;
        console.log(req.body);
        const response = yield client.insert.send_order(coords.LAT, coords.LON, Number(distance), time, status, CLIENTID);
        console.log(response);
        res.json(response);
    }));
    server_1.Server.routes().get('/client/selects/get-only-pizzas', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const response = yield client.selects.get_only_pizza();
        console.log(response);
        res.json(response);
    }));
    server_1.Server.routes().get('/client/selects/get-orders/:clientID', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { clientID } = req.params;
        console.log(req.params);
        const response = yield client.selects.get_orders(clientID);
        console.log(response);
        res.json(response);
    }));
}
exports.client_routes = client_routes;
