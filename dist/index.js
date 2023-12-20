"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseModel = void 0;
//server imports
const server_1 = require("./server/server");
const admin_1 = require("./services/class/admin");
const client_1 = require("./services/class/client");
const deliver_1 = require("./services/class/deliver");
// creating server instance
const server = new server_1.Server(8080, 'localhost');
// set configuration
server.config();
// set routes
server.routers();
// create database connection
exports.databaseModel = server.connectDatabase('localhost', 'root', '1001', 'db_api_TS');
// test database connection
server.testDatabaseConnection();
// build and sync models 
server.buildDatabase();
// start server
console.log(server.start());
const admin = new admin_1.Admin();
const client = new client_1.Client();
const deliver = new deliver_1.Deliver();
admin.inserts.create_account();
