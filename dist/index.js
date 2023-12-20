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
exports.databaseModel = server.connectDatabase('localhost', 'root', 'leoDev@924', 'db_api_TS', 'mariadb');
(() => __awaiter(void 0, void 0, void 0, function* () {
    // test database connection
    console.log(yield server.testDatabaseConnection());
    // build and sync models 
    console.log(yield server.buildDatabase({ force: true }));
}))();
const admin = new admin_1.Admin();
const client = new client_1.Client();
const deliver = new deliver_1.Deliver();
require('./database/relationships');
// start server
console.log(server.start());
