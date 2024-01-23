"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSelects = void 0;
const server_1 = require("../../server/server");
const { randomUUID } = require("crypto");
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
            return pizzas.findAll({
                include: category,
            })
                .then((data) => data)
                .catch((error) => error.message);
        }
        else
            return 'type of model is undefined';
    }
    get_info_pizza(pizzaID) {
        const pizzas = this.getTable('PIZZAs');
        const category = this.getTable('CATEGORies');
        const igredients = this.getTable('IGREDIENTs');
        if (typeof pizzas != 'undefined' && typeof category != 'undefined' && typeof igredients != 'undefined') {
            return pizzas.findByPk(pizzaID, {
                include: [category, igredients]
            }).then((data) => data)
                .catch((error) => error.message);
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
}
exports.ClientSelects = ClientSelects;
