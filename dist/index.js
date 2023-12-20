"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//server imports
const server_1 = require("./server/server");
// creating server instance
const server = new server_1.Server(8080, 'localhost');
// set configuration
server.config();
// set routes
server.routers();
// create database connection
server.connectDatabase('localhost', 'root', '1001', 'db_api_TS');
// test database connection
server.testDatabaseConnection();
// build and sync models 
server.buildDatabase();
// start server
console.log(server.start());
