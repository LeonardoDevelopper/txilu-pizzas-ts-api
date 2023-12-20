"use strict";
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
        return this.database.testConnection();
    }
    buildDatabase(force) {
        return this.database.build(force);
    }
}
exports.Server = Server;
