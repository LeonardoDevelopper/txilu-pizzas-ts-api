"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminInserts = void 0;
const server_1 = require("../../server/server");
const { randomUUID } = require("crypto");
class AdminInserts {
    constructor() {
        this.UUID = randomUUID;
    }
    getTable(name) {
        console.log(server_1.Server.getDatabaseTables());
        const aux = server_1.Server.getDatabaseTables().find((model) => name == model.getTableName());
        return aux;
    }
    create_account(name, email, phone, password) {
        const admin = this.getTable('ADMINs');
        if (typeof admin != 'undefined') {
            return admin.create({
                ID: this.UUID(),
                NAME: name,
                EMAIL: email,
                PHONE_NUMBER: phone,
                PASS_WORD: password
            }).then((model) => {
                console.log("User account created : )" + model);
                return {
                    OK: true,
                    message: "User account created : )"
                };
            })
                .catch((error) => {
                console.log(error.message + " : (");
                return {
                    OK: false,
                    messageError: error.name + " : ("
                };
            });
        }
        return {
            OK: false,
            messageError: "Error: model is type of undefined  : ("
        };
    }
    create_deliver_account(ID, board, carPhoto, color, name, model) {
        const deliver = this.getTable('DELIVERs');
        const car = this.getTable('CARs');
        if (typeof deliver != 'undefined' && typeof car != 'undefined') {
            return deliver.create({
                ID: ID
            })
                .then((deliver) => {
                return car.create({
                    ID: board,
                    PHOTO: carPhoto,
                    NAME: name,
                    MODEL: model,
                    COLOR: color,
                    DELIVERID: ID
                }).then(() => {
                    return {
                        OK: true,
                        message: "Deliver account created : )"
                    };
                }).catch((error) => {
                    return {
                        OK: false,
                        messageError: error.message + " : ("
                    };
                });
            })
                .catch((error) => {
                console.log(error.message + " : (");
                return {
                    OK: false,
                    messageError: error.message + " : ("
                };
            });
        }
        return {
            OK: false,
            messageError: "Error: model is type of undefined  : ("
        };
    }
    create_pizza_category(name) {
        const category = this.getTable("CATEGORies");
        console.log(category);
        if (typeof category != 'undefined') {
            return category.create({
                ID: this.UUID(),
                NAME: name
            })
                .then(() => {
                return {
                    OK: true,
                    message: "Pizza category created : )"
                };
            }).catch((error) => {
                return {
                    OK: false,
                    messageError: error.message + " : ("
                };
            });
        }
        return {
            OK: false,
            messageError: "Error: model is type of undefined  : ("
        };
    }
    create_pizza(name, photo, price, status, category, igredients) {
        const pizzas = this.getTable("PIZZAs");
        if (typeof pizzas != 'undefined') {
            const pizzaID = this.UUID();
            return pizzas.create({
                ID: pizzaID,
                NAME: name,
                PHOTO: photo,
                PRICE: price,
                STATUS: status,
                CATEGORYID: category
            })
                .then(() => {
                const ingredient = this.getTable('IGREDIENTs');
                if (typeof ingredient != 'undefined') {
                    igredients.forEach((igre) => {
                        ingredient.create({ NAME: igre, PIZZAID: pizzaID });
                    });
                    console.log("pizza created : )");
                }
                return {
                    OK: true,
                    message: "Pizza created : )"
                };
            }).catch((error) => {
                return {
                    OK: false,
                    messageError: error.message + " : ("
                };
            });
        }
        return {
            OK: false,
            messageError: "Error: model is type of undefined  : ("
        };
    }
}
exports.AdminInserts = AdminInserts;
