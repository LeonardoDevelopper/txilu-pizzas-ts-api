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
exports.ClientInserts = void 0;
const server_1 = require("../../server/server");
const { randomUUID } = require("crypto");
class ClientInserts {
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
    create_account(email, phone, password) {
        const client = this.getTable("CLIENTs");
        if (typeof client != "undefined") {
            return client.create({
                ID: this.UUID(),
                EMAIL: email,
                PHONE_NUMBER: phone,
                PASS_WORD: password
            }).then((data) => {
                return this.response(true, 'User created successfully : )', data);
            })
                .catch((error) => {
                return this.response(false, 'Error: ' + error.message);
            });
        }
        else {
            return this.response(false, 'type of model is undefined');
        }
    }
    add_to_cart(clientID, pizzaID) {
        const cart = this.getTable('CARTs');
        if (typeof cart != 'undefined') {
            return cart.create({
                ID: this.UUID(),
                QUANT: 1,
                STATUS: 1,
                PIZZAID: pizzaID,
                CLIENTID: clientID,
            })
                .then(() => {
                return this.response(true, 'Pizza add to cart successfully : )');
            })
                .catch((error) => {
                return this.response(false, 'Error: ' + error.name);
            });
        }
        return this.response(false, 'type of model is undefined');
    }
    send_order(lat, lon, distance, time, status, clienetID) {
        const orders = this.getTable('ORDERs');
        const item_orders = this.getTable('ORDER_ITEMs');
        if (typeof orders != 'undefined' && typeof item_orders != 'undefined') {
            return orders.create({
                ID: randomUUID(),
                LAT: lat,
                LON: lon,
                DISTANCE: distance,
                TIME: time,
                STATUS: status,
                CLIENTID: clienetID,
            })
                .then((data) => {
                return this.response(true, 'criado', data);
            })
                .catch((error) => {
                console.log(error);
                return this.response(false, 'Error: ' + error.name);
            });
        }
        return this.response(false, 'type of model is undefined');
    }
    add_order_items(items, orderID) {
        return __awaiter(this, void 0, void 0, function* () {
            const item_orders = this.getTable('ORDER_ITEMs');
            if (typeof item_orders != 'undefined') {
                let result = [];
                for (const item of items) {
                    result.push(yield item_orders.create({
                        ID: randomUUID(),
                        QUANT: item.quantity,
                        ORDERID: orderID,
                        PIZZAID: item.sku
                    })
                        .then((data) => {
                        return this.response(true, 'criado', data);
                    })
                        .catch((error) => {
                        console.log(error);
                        return this.response(false, 'Error: ' + error.name);
                    }));
                }
                return result[result.length - 1].OK ? this.response(true, 'Items added successfully') : this.response(false, 'Cannot add items');
            }
            return this.response(false, 'type of model is undefined');
        });
    }
}
exports.ClientInserts = ClientInserts;
