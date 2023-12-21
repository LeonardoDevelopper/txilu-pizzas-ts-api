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
const server_1 = require("./server/server");
const admin_1 = require("./services/class/admin");
const client_1 = require("./services/class/client");
const deliver_1 = require("./services/class/deliver");
function sync() {
    try {
        console.log('including user services...');
        const admin = new admin_1.Admin();
        const client = new client_1.Client();
        const deliver = new deliver_1.Deliver();
        require('./database/relationships');
        console.log('user services included with sucess : )');
    }
    catch (error) {
        console.log("error in include user services : (");
        console.log('\x1b[36m%s\x1b[0m', 'Texto em Ciano'); // Ciano
        console.log('\x1b[31m%s\x1b[0m', 'error in include user services : ('); // Vermelho
    }
}
// start Server
console.log(server_1.Server.start(8080, 'localhost'));
// set configuration
server_1.Server.config();
// set routes
server_1.Server.routers();
// create database connection
//sync()
server_1.Server.connectDatabase('localhost', 'root', '1001', 'db_api_TS', 'mysql');
exports.default = server_1.Server.model();
;
(() => __awaiter(void 0, void 0, void 0, function* () {
    // test database connection
    console.log(yield server_1.Server.testDatabaseConnection());
    /*
    */
    // build and sync models 
    console.log(yield server_1.Server.buildDatabase({ force: true }));
}))();
// Exemplo: Pare a animação após 5 segundos
function Loading(origin, dist, finaly) {
    const frames = [
        "[Server]....      .[Database]",
        "[Server]...      ..[Database]",
        "[Server]..      ...[Database]",
        "[Server].      ....[Database]",
        "[Server]      .....[Database]",
        "[Server].      ....[Database]",
        "[Server]..      ...[Database]",
        "[Server]...      ..[Database]",
        "[Server]....      .[Database]",
        "[Server].....      [Database]"
    ];
    while (Loading(origin, dist, finaly)) {
        const animateConnection = () => {
            let currentIndex = 0;
            const interval = setInterval(() => {
                console.clear();
                console.log('\x1b[36m%s\x1b[0m', frames[currentIndex]);
                currentIndex = (currentIndex + 1) % frames.length;
            }, 500);
            return () => {
                clearInterval(interval);
                console.clear();
            };
        };
        return;
        const stopAnimation = animateConnection();
    }
    console.log(finaly);
    return false;
}
