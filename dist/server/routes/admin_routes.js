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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin_routes = void 0;
const admin_1 = require("../../services/class/admin");
const server_1 = require("../server");
const google_drive_1 = require("../api/google_drive");
const storage_1 = __importDefault(require("../api/storage"));
const nodemail_1 = __importDefault(require("../api/nodemail"));
const uploadPizzas = new storage_1.default('pizzas');
function admin_routes() {
    const admin = new admin_1.Admin;
    server_1.Server.routes().post('/admin/inserts/create-account', (req, res) => __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        const { name, email, phone, password } = req.body.data;
        const dbResponse = yield admin.inserts.create_account(name, email, phone, password);
        res.json(dbResponse);
    }));
    server_1.Server.routes().post('/admin/request-reset-email', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const emailReset = new nodemail_1.default();
        const emailResponse = emailReset.sendEmail('leonardodevelopper924@gmail.com', 'Redefinir senha', '<span>Recebemos o seu pedido de redefinição de senha acesse </span> <a href ="http://localhost:3000/adm/reset-password">Redefinir senha</a> <span>Para redefinir a sua senha</span>');
        console.log(emailResponse);
        res.json(emailReset);
    }));
    server_1.Server.routes().get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, google_drive_1.webViewURL)('1vgiG-VCKRLT8hdRQGjviYRaV4Zq4UUAq');
        res.send(`<img src ="${result.webViewLink}" />`);
    }));
    server_1.Server.routes().post('/admin/inserts/reset-password', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        console.log(req.body);
        const dbResponse = yield admin.update.reset_password(email, password);
        console.log(dbResponse);
        res.json(dbResponse);
    }));
    server_1.Server.routes().post('/admin/inserts/set-location', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { ID, coords } = req.body.data;
        console.log(req.body);
        const dbResponse = yield admin.inserts.set_admin_location(ID, coords.lat, coords.lon);
        console.log(dbResponse);
        res.json(dbResponse);
    }));
    server_1.Server.routes().post('/admin/inserts/create-deliver-account', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { infoDeliver, infoCar } = req.body.data;
        const dbResponse = yield admin.inserts.create_deliver_account(infoDeliver.id, infoDeliver.photo, infoDeliver.firstname, infoDeliver.lastname, infoDeliver.email, infoDeliver.phone);
        res.json(dbResponse);
    }));
    server_1.Server.routes().post('/admin/inserts/create-pizza-category', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { name } = req.body;
        const dbResponse = yield admin.inserts.create_pizza_category(name);
        res.json(dbResponse);
    }));
    server_1.Server.routes().post('/admin/inserts/create-pizza', uploadPizzas.setFile().single('photo'), (req, res) => __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        console.log();
        const { name, price, desc, category, igredients } = req.body;
        const dbResponse = yield admin.inserts.create_pizza(name, uploadPizzas.createWebLinkView(), price, 'Avaliable', category, desc, igredients.split(','));
        console.log(dbResponse);
        res.json(dbResponse);
    }));
    server_1.Server.routes().post('/admin/selects/get-account', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { any, password } = req.body.data;
        console.log(req.body);
        const dbResponse = yield admin.selects.getAccount(any, password);
        console.log(dbResponse);
        res.json(dbResponse);
    }));
    server_1.Server.routes().get('/admin/selects/get-categories', (req, res) => __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        const dbResponse = yield admin.selects.getCategories();
        console.log(dbResponse);
        res.json(dbResponse);
    }));
    server_1.Server.routes().get('/admin/selects/get-pizzas', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const dbResponse = yield admin.selects.getPizzas();
        console.log(dbResponse);
        res.json(dbResponse);
    }));
}
exports.admin_routes = admin_routes;
