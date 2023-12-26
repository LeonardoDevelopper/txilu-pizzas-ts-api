"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const admin_routes_1 = require("./server/routes/admin_routes");
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
