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
        return this.database;
    }
    testConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.database.authenticate()
                .then(() => "database synchronously : )")
                .catch((error) => "Error authenticating : (\n" + error.message);
        });
    }
    build(force) {
        return this.database.sync(force)
            .then(() => "database buillded : )")
            .catch((error) => "Error buillding database : (\n" + error.message);
    }
    model() {
        return this.connect();
    }
}
exports.DataBase = DataBase;
