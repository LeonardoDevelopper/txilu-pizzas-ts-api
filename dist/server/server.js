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
exports.Server = void 0;
const database_1 = require("../database/database");
class Server {
    // buillding properties  
    constructor(port, protocol) {
        Server.port = port;
        Server.protocol = protocol;
    }
    // server methods
    static config() {
        Server.starter.use(Server.express.json());
        Server.starter.use(Server.express.urlencoded({ extended: false }));
        console.log("set server config...");
    }
    // start server
    static start(port, protocol) {
        Server.port = port;
        Server.protocol = protocol;
        if (Server.starter)
            return Server.starter;
        else {
            Server.starter = new Server.express();
            Server.starter.listen(Server.port, (error) => {
                return error;
            });
            console.log("Starting server...");
            return `server is running... on http://${Server.protocol}:${Server.port}/`;
        }
    }
    static routers() {
        Server.starter.use('', Server.adm_routes);
        console.log("including server routes...");
    }
    // database methods
    static connectDatabase(dbhost, dbuser, dbpassword, dbname, dbdialect, dbport) {
        console.log("connecting server to database...");
        return Server.database = database_1.DataBase.connect(dbhost, dbuser, dbpassword, dbname, dbdialect, dbport);
    }
    static testDatabaseConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Testing Database Connection...");
            return yield database_1.DataBase.testConnection();
        });
    }
    static buildDatabase(force) {
        console.log("synchroning tables... ");
        return database_1.DataBase.build(force);
    }
    static model() {
        return database_1.DataBase.databaseModel();
    }
}
exports.Server = Server;
// declaration os props
Server.express = require("express");
Server.adm_routes = require("./routes/adm_routes");
