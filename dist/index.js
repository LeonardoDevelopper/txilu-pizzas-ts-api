"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const admin_routes_1 = require("./server/routes/admin_routes");
const deliver_routes_1 = require("./server/routes/deliver_routes");
const client_routes_1 = require("./server/routes/client_routes");
const nodemail_1 = __importDefault(require("./server/api/nodemail"));
// start Server
server_1.Server.start(8080, 'localhost');
// create database connection
server_1.Server.connectDatabase('localhost', 'root', '1001', 'db_api_TS', 'mysql');
// set configuration
server_1.Server.config();
// test database connection  
server_1.Server.testDatabaseConnection();
// build and sync models 
server_1.Server.buildDatabase();
server_1.Server.createDatabaseTables();
server_1.Server.databaseRelationShips();
//routes
(0, admin_routes_1.admin_routes)();
(0, deliver_routes_1.deliver_routes)();
(0, client_routes_1.client_routes)();
//uploadFile()
//webViewURL('1vgiG-VCKRLT8hdRQGjviYRaV4Zq4UUAq')
const emailReset = new nodemail_1.default();
const emailResponse = emailReset.sendEmail('inikojericho008@gmail.com', 'Redefinir senha', '<span>Recebemos o seu pedido de redefinição de senha acesse </span> <a href ="http://localhost:3000/adm/reset-password">Redefinir senha</a> <span>Para redefinir a sua senha</span>');
console.log(emailResponse);
