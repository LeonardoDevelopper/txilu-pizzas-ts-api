"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const admin_routes_1 = require("./server/routes/admin_routes");
const deliver_routes_1 = require("./server/routes/deliver_routes");
const client_routes_1 = require("./server/routes/client_routes");
const google_drive_1 = require("./server/api/google_drive");
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
(0, google_drive_1.webViewURL)('1vgiG-VCKRLT8hdRQGjviYRaV4Zq4UUAq');
