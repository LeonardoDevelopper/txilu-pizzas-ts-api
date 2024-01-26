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
const express_1 = require("express");
const admin_1 = require("../../services/class/admin");
const server_1 = require("../server");
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const google_drive_1 = require("../api/google_drive");
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.filename + '-' + Date.now() + path_1.default.extname(file.originalname));
    }
});
const upload = (0, multer_1.default)({ storage: storage });
function admin_routes() {
    const admin = new admin_1.Admin;
    server_1.Server.routes().post('/admin/inserts/create-account', (req, res) => __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        const { name, email, phone, password } = req.body.data;
        const dbResponse = yield admin.inserts.create_account(name, email, phone, password);
        res.json(dbResponse);
    }));
    server_1.Server.routes().post('/admin/request-reset-email', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { email } = req.body;
        const nodemailer = require('nodemailer');
        console.log(email);
        // Configuração do transporte SMTP 
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'leonardodevelopper924@gmail.com',
                pass: 'ryqc deln jegw ynko',
            },
        });
        // Opções do e-mail
        const mailOptions = {
            from: 'leonardodevelopper924@gmail.com',
            to: email,
            subject: 'Redefinir senha',
            html: '<span>Olá, aqui é a equipa tecnica da <strong>txilu-pizzas</strong> recebemos o seu pedido de redefinição de senha acesse </span> <a href ="http://localhost:3000/adm/reset-password">Redefinir senha</a> <span>Para redefinir a sua senha</span>',
        };
        // Enviar e-mail
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Erro ao enviar e-mail:', error);
                express_1.response.json({ OK: false, message: error.message });
            }
            else {
                console.log('E-mail enviado:', info.response);
                express_1.response.json({ OK: true, message: "Recebemos o seu email" });
            }
        });
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
        const { lat, lon, adminID } = req.body.data;
        const dbResponse = yield admin.inserts.set_admin_location(lat, lon, adminID);
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
    server_1.Server.routes().post('/admin/inserts/create-pizza', upload.single('photo'), (req, res) => __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        //const { name, photo, price, status, category, igredients } = req.body.data ;
        //const dbResponse = await admin.inserts.create_pizza(name, photo ,price, status, category, igredients)
        //res.json(dbResponse);
    }));
    server_1.Server.routes().post('/admin/selects/get-account', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { any, password } = req.body.data;
        console.log(req.body);
        const dbResponse = yield admin.selects.getAccount(any, password);
        console.log(dbResponse);
        res.json(dbResponse);
    }));
    server_1.Server.routes().get('/admin/selects/get-categories', (req, res) => __awaiter(this, void 0, void 0, function* () {
        // console.log(req.body)
        const dbResponse = yield admin.selects.getCategories();
        // console.log(dbResponse)
        res.json(dbResponse);
    }));
}
exports.admin_routes = admin_routes;
