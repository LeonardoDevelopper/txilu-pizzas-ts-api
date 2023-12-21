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
const sequelize_1 = require("sequelize");
class DataBase {
    constructor(host, user, password, name, dialect, port) {
        this.host = host;
        this.user = user;
        this.password = password;
        this.name = name;
        this.dialect = dialect;
        this.port = port;
    }
    static connect(host, user, password, name, dialect, port) {
        if (DataBase.connection)
            return DataBase.connection;
        return DataBase.connection = new sequelize_1.Sequelize(name, user, password, {
            host: host,
            dialect: dialect,
            port: port
        });
    }
    static testConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield DataBase.connection.authenticate()
                .then(() => "database synchronously : )")
                .catch((error) => "Error authenticating : (\n" + error.message);
        });
    }
    static build(force) {
        return DataBase.connection.sync(force)
            .then(() => "database buillded : )")
            .catch((error) => "Error buillding database : (\n" + error.message);
    }
    static databaseModel() {
        return DataBase.connection;
    }
}
exports.DataBase = DataBase;
DataBase.sequelize = require('sequelize');
