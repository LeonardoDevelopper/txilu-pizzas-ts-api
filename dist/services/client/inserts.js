"use strict";
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
    create_account(firstname, lastname, email, phone, password) {
        const client = this.getTable("CLIENTs");
        if (typeof client != "undefined") {
            return client.create({
                ID: this.UUID(),
                FIRST_NAME: firstname,
                LAST_NAME: lastname,
                EMAIL: email,
                PHONE_NUMBER: phone,
                PASS_WORD: password
            }).then(() => {
                return this.response(true, 'User created successfully : )');
            })
                .catch((error) => {
                return this.response(false, 'Error: ' + error.message);
            });
        }
        else {
            return this.response(false, 'type of model is undefined');
        }
    }
    add_to_cart(clientID, quant, status, pizzaID) {
        const cart = this.getTable('CARTs');
        if (typeof cart != 'undefined') {
            return cart.create({
                ID: this.UUID(),
                QUANT: quant,
                STATUS: status,
                CLIENTID: clientID,
                PIZZAID: pizzaID
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
}
exports.ClientInserts = ClientInserts;
