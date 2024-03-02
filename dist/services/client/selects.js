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
exports.ClientSelects = void 0;
const server_1 = require("../../server/server");
const { randomUUID } = require("crypto");
const sequelize_1 = require("sequelize");
class ClientSelects {
    constructor() {
        this.UUID = randomUUID;
    }
    getTable(name) {
        console.log(server_1.Server.getDatabaseTables());
        const aux = server_1.Server.getDatabaseTables().find((model) => name == model.getTableName());
        return aux;
    }
    response(status, message, data) {
        if (status) {
            return {
                OK: status,
                message: message,
                data: data
            };
        }
        else {
            return {
                OK: false,
                messageError: message
            };
        }
    }
    get_pizzas() {
        const pizzas = this.getTable('PIZZAs');
        const category = this.getTable('CATEGORies');
        if (typeof pizzas != 'undefined' && typeof category != 'undefined') {
            return category.findAll({
                include: pizzas,
            })
                .then((data) => this.response(true, 'All pizzas', data))
                .catch((error) => this.response(false, error.message));
        }
        else
            return this.response(false, 'type of model is undefined');
    }
    get_only_pizza() {
        const pizzas = this.getTable('PIZZAs');
        if (typeof pizzas != 'undefined') {
            return pizzas.findAll()
                .then((data) => this.response(true, 'All pizzas', data))
                .catch((error) => this.response(false, error.message));
        }
        else
            return this.response(false, 'type of model is undefined');
    }
    getAccount(any, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.getTable('CLIENTs');
            if (typeof client != 'undefined') {
                return yield client.findOne({
                    where: {
                        [sequelize_1.Op.or]: [
                            { EMAIL: any },
                            { PHONE_NUMBER: any },
                        ],
                        PASS_WORD: password,
                    }
                })
                    .then((data) => data ? this.response(true, 'Logado com sucesso!', data) : this.response(false, 'Email ou senha errada'))
                    .catch((error) => this.response(false, error.name));
            }
            return this.response(false, 'Error: model is type of undefined  : (');
        });
    }
    get_info_pizza(pizzaID) {
        const pizzas = this.getTable('PIZZAs');
        const category = this.getTable('CATEGORies');
        const igredients = this.getTable('IGREDIENTs');
        if (typeof pizzas != 'undefined' && typeof category != 'undefined' && typeof igredients != 'undefined') {
            return pizzas.findByPk(pizzaID, {
                include: [category, igredients]
            }).then((data) => this.response(true, 'pizza', data))
                .catch((error) => this.response(false, error.message));
        }
        else
            return 'type of model is undefined';
    }
    get_pizza_cart(clientID) {
        const cart = this.getTable('CARTs');
        const pizzas = this.getTable('PIZZAs');
        if (typeof pizzas != 'undefined' && typeof cart != 'undefined') {
            return cart.findAll({
                where: { CLIENTID: clientID },
                include: [pizzas]
            }).then((data) => data)
                .catch((error) => error.message);
        }
        else
            return 'type of model is undefined';
    }
    count_cart(clientID) {
        const cart = this.getTable('CARTs');
        if (typeof cart != 'undefined') {
            return cart.count({
                where: { CLIENTID: clientID },
            }).then((num) => this.response(true, 'all products on cart', num))
                .catch((error) => this.response(false, error.message));
        }
        else
            return 'type of model is undefined';
    }
    get_cart(clientID) {
        const cart = this.getTable('CARTs');
        const pizzas = this.getTable('PIZZAs');
        if (typeof cart != 'undefined' && typeof pizzas != 'undefined') {
            return cart.findAll({
                where: { CLIENTID: clientID },
                include: [pizzas]
            }).then((data) => this.response(true, 'all products on cart', { products: data, counter: data.length }))
                .catch((error) => this.response(false, error.message));
        }
        else
            return 'type of model is undefined';
    }
    get_orders(clientID) {
        const orders = this.getTable('ORDERs');
        const items = this.getTable('ORDER_ITEMs');
        if (typeof orders != 'undefined' && typeof items != 'undefined') {
            return orders.findAll({
                where: { CLIENTID: clientID },
                include: [items]
            }).then((data) => this.response(true, 'all orders', data))
                .catch((error) => this.response(false, error.message));
        }
        else
            return 'type of model is undefined';
    }
}
exports.ClientSelects = ClientSelects;
