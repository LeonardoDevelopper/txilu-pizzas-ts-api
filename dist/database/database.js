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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = void 0;
const sequelize_1 = require("sequelize");
const account_1 = __importDefault(require("../models/admin/account"));
const location_1 = __importDefault(require("../models/admin/location"));
const cart_1 = __importDefault(require("../models/client/cart"));
const category_1 = __importDefault(require("../models/pizza/category"));
const account_2 = __importDefault(require("../models/client/account"));
const account_3 = __importDefault(require("../models/deliver/account"));
const location_2 = __importDefault(require("../models/deliver/location"));
const rate_1 = __importDefault(require("../models/deliver/rate"));
const favorite_deliver_1 = __importDefault(require("../models/client/favorite_deliver"));
const items_1 = __importDefault(require("../models/order/items"));
const order_1 = __importDefault(require("../models/order/order"));
const pizza_1 = __importDefault(require("../models/pizza/pizza"));
const favorite_pizza_1 = __importDefault(require("../models/client/favorite_pizza"));
const local_delivery_1 = __importDefault(require("../models/client/local_delivery"));
const rate_2 = __importDefault(require("../models/pizza/rate"));
const relationships_1 = __importDefault(require("./relationships"));
const igredients_1 = __importDefault(require("../models/pizza/igredients"));
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
                .catch((error) => "cannot stabilize connection,error");
        });
    }
    static build(force) {
        return __awaiter(this, void 0, void 0, function* () {
            return DataBase.connection.sync(force)
                .then(() => "database buillded : )")
                .catch((error) => "error buillding database,error");
        });
    }
    static databaseModel() {
        return DataBase.connection;
    }
    static getTables() {
        return DataBase.tables;
    }
    static createTables(reference) {
        DataBase.tables.push((0, account_1.default)(reference));
        DataBase.tables.push((0, location_1.default)(reference));
        DataBase.tables.push((0, cart_1.default)(reference));
        DataBase.tables.push((0, category_1.default)(reference));
        DataBase.tables.push((0, account_2.default)(reference));
        DataBase.tables.push((0, account_3.default)(reference));
        DataBase.tables.push((0, location_2.default)(reference));
        DataBase.tables.push((0, rate_1.default)(reference));
        DataBase.tables.push((0, favorite_deliver_1.default)(reference));
        DataBase.tables.push((0, items_1.default)(reference));
        DataBase.tables.push((0, order_1.default)(reference));
        DataBase.tables.push((0, pizza_1.default)(reference));
        DataBase.tables.push((0, local_delivery_1.default)(reference));
        DataBase.tables.push((0, favorite_pizza_1.default)(reference));
        DataBase.tables.push((0, rate_2.default)(reference));
        DataBase.tables.push((0, igredients_1.default)(reference));
    }
    static setRelationships() {
        (0, relationships_1.default)();
    }
}
exports.DataBase = DataBase;
DataBase.sequelize = require('sequelize');
DataBase.tables = [];
