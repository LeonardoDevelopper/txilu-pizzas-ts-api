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
        // declaration os props
        this.express = require("express");
        this.adm_routes = require("../routes/adm_routes");
        this.server = new this.express();
        this.port = port;
        this.protocol = protocol;
    }
    // server methods
    config() {
        this.server.use(this.express.json());
        this.server.use(this.express.urlencoded({ extends: false }));
    }
    start() {
        this.server.listen(this.port, (error) => {
            return error;
        });
        return `server is running... on ${this.protocol}:${this.port}/`;
    }
    routers() {
        this.server.use('', this.adm_routes);
    }
    // database methods
    connectDatabase(dbhost, dbuser, dbpassword, dbname, dbdialect, dbport) {
        this.database = new database_1.DataBase(dbhost, dbuser, dbpassword, dbname, dbdialect, dbport);
        try {
            return this.database.connect();
        }
        catch (error) {
            return error.message;
        }
    }
    testDatabaseConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.database.testConnection();
        });
    }
    buildDatabase(force) {
        return this.database.build(force);
    }
}
exports.Server = Server;
