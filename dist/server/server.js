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
        console.log('\x1b[36m%s\x1b[0m', "[config] : setting server config...");
        try {
            Server.starter.use(Server.express.json());
            Server.starter.use(Server.express.urlencoded({ extended: false }));
            Server.starter.use('/uploads', Server.express.static('uploads'));
            Server.starter.use((req, res, next) => {
                res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Defina o domínio do front-end (Next.js)
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
                res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
                next();
            });
            console.log('\x1b[32m%s\x1b[0m', "[config] : server config loaded : )");
        }
        catch (error) {
            console.log('\x1b[31m%s\x1b[0m', '[error] : server config cannot be loaded : (');
        }
    }
    // start server
    static start(port, protocol) {
        Server.port = port;
        Server.protocol = protocol;
        if (Server.starter)
            console.log('\x1b[33m%s\x1b[0m', "[server] : already started : |");
        else {
            try {
                console.log('\x1b[36m%s\x1b[0m', "[server] : Starting...");
                Server.starter = Server.express();
                Server.starter.listen(Server.port);
                console.log('\x1b[32m%s\x1b[0m', `[server] : started : ) on http://${Server.protocol}:${Server.port}/`);
            }
            catch (error) {
                console.log('\x1b[31m%s\x1b[0m', "[error] : server cannot be started : (");
            }
        }
    }
    static routes() {
        return Server.starter;
    }
    static use(origin, option) {
        return __awaiter(this, void 0, void 0, function* () {
            Server.starter.use(origin, option);
        });
    }
    static routers() {
        try {
            console.log('\x1b[36m%s\x1b[0m', "[routes] : including server routes...");
            Server.starter.use('', Server);
            console.log('\x1b[32m%s\x1b[0m', "[routes] : server routes included : )");
        }
        catch (error) {
            console.log('\x1b[31m%s\x1b[0m', "[error] : cannot include server routes : (" + error);
        }
    }
    // database methods
    static connectDatabase(dbhost, dbuser, dbpassword, dbname, dbdialect, dbport) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('\x1b[36m%s\x1b[0m', "[server] : connecting...[database]");
                Server.database = database_1.DataBase.connect(dbhost, dbuser, dbpassword, dbname, dbdialect, dbport);
                console.log('\x1b[32m%s\x1b[', "[server] : connected... [database]");
            }
            catch (error) {
                console.log('\x1b[32m%s\x1b[', "[error] : cannot connect database");
            }
        });
    }
    static testDatabaseConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('\x1b[36m%s\x1b[0m', "[server] : testing connection...");
            const res = yield database_1.DataBase.testConnection();
            if (res.split(',').at(1) == 'error')
                console.log('\x1b[31m%s\x1b[', "[database] : " + res.split(',').at(0));
            else
                console.log('\x1b[32m%s\x1b[', "[database] : " + res);
        });
    }
    static buildDatabase(force) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('\x1b[36m%s\x1b[0m', "[server] : synchroning tables...");
            const res = yield database_1.DataBase.build(force);
            if (res.split(',').at(1) == 'error')
                console.log('\x1b[31m%s\x1b[', "[database] : " + res.split(',').at(0));
            else
                console.log('\x1b[32m%s\x1b[', "[database] : " + res);
        });
    }
    static createDatabaseTables() {
        database_1.DataBase.createTables(database_1.DataBase.databaseModel());
    }
    static databaseRelationShips() {
        database_1.DataBase.setRelationships();
    }
    static model() {
        return database_1.DataBase.databaseModel();
    }
    static getDatabaseTables() {
        return database_1.DataBase.getTables();
    }
}
exports.Server = Server;
Server.express = require("express");
