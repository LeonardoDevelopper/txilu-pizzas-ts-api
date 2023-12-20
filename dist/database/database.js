"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = void 0;
class DataBase {
    constructor(host, user, password, name, dialect, port) {
        this.host = host;
        this.user = user;
        this.password = password;
        this.name = name;
        this.dialect = dialect;
        this.port = port;
        this.sequelize = require('sequelize');
    }
    connect() {
        this.database = new this.sequelize(this.name, this.user, this.password, {
            host: this.host,
            dialect: this.dialect,
            port: this.port
        });
    }
    testConnection() {
        return this.database.authenticate()
            .then(() => "database synchronously : )")
            .catch((error) => "Error authenticating : (\n" + error.message);
    }
    build(force) {
        return this.database.sync(force)
            .then(() => "database buillded : )")
            .catch((error) => "Error buillding database : (\n" + error.message);
    }
}
exports.DataBase = DataBase;
