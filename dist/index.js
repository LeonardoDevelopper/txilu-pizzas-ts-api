"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const adm_routes_1 = require("./server/routes/adm_routes");
// start Server
server_1.Server.start(8080, 'localhost');
server_1.Server.start(8080, 'localhost');
// create database connection
server_1.Server.connectDatabase('localhost', 'root', '1001', 'db_api_TS', 'mysql');
exports.default = server_1.Server.model();
// set configuration
server_1.Server.config();
// test database connection 
server_1.Server.testDatabaseConnection();
// build and sync models 
server_1.Server.buildDatabase();
//routes()
(0, adm_routes_1.admin_routes)();
