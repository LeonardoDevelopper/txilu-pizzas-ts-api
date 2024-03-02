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
    create_account(name, email, phone, password) {
        const admin = this.getTable('ADMINs');
        if (typeof admin != 'undefined') {
            return admin.create({
                ID: this.UUID(),
                NAME: name,
                EMAIL: email,
                PHONE_NUMBER: phone,
                PASS_WORD: password
            }).then((data) => {
                return this.response(true, 'User account created : )', data);
            })
                .catch((error) => {
                return this.response(false, error.name);
            });
        }
        return this.response(false, 'Error: model is type of undefined  : (');
    }
    set_admin_location(adminID, lat, lon) {
        const admin_location = this.getTable('ADMIN_LOCATIONs');
        if (typeof admin_location != 'undefined') {
            return admin_location.create({
                ID: this.UUID(),
                LAT: lat,
                LON: lon,
                ADMINID: adminID
            }).then(() => {
                return this.response(true, 'Admin location updated successfully');
            }).catch((error) => {
                return this.response(false, 'Error:' + error.message);
            });
        }
        else {
            return this.response(false, 'Error: model is type of undefined  : (');
        }
    }
    create_deliver_account(photo, firstname, lastname, email, phone) {
        return __awaiter(this, void 0, void 0, function* () {
            const deliver = this.getTable('DELIVERs');
            const deliver_location = this.getTable('DELIVER_LOCATIONs');
            if (typeof deliver != 'undefined' && typeof deliver_location != 'undefined') {
                return deliver.create({
                    ID: randomUUID(),
                    PHOTO: photo,
                    FIRST_NAME: firstname,
                    LAST_NAME: lastname,
                    EMAIL: email,
                    PHONE_NUMBER: phone
                }).then(() => {
                    return this.response(true, 'Entregador Cadastrado com sucesso');
                })
                    .catch((error) => this.response(false, error.message));
            }
            else {
                return this.response(false, 'Error: model is type of undefined  : (');
            }
        });
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
                return this.response(true, "Pizza category created : )");
            }).catch((error) => {
                return this.response(false, error.message);
            });
        }
        return this.response(false, "Error: model is type of undefined  : (");
    }
    create_pizza(name, photo, price, status, categoryId, desc, igredients) {
        return __awaiter(this, void 0, void 0, function* () {
            const pizzas = this.getTable("PIZZAs");
            const igredient = this.getTable('IGREDIENTs');
            var res;
            if (typeof pizzas != 'undefined' && typeof igredient != 'undefined') {
                return yield pizzas.create({
                    ID: randomUUID(),
                    NAME: name,
                    PHOTO: photo,
                    PRICE: price,
                    DESC: desc,
                    STATUS: status,
                    CATEGORYID: categoryId
                }).then(() => {
                    pizzas.addHook('afterCreate', (pizza) => {
                        igredients.forEach((igre) => {
                            igredient.create({ ID: this.UUID(), NAME: igre, PIZZAID: pizza.dataValues.ID })
                                .then(() => {
                                res = this.response(true, 'Pizza created');
                            })
                                .catch((error) => {
                                res = error; //this.response(false, error.message)
                            });
                        });
                    });
                    return this.response(true, 'Pizza cadastrada com sucesso!');
                })
                    .catch((error) => this.response(false, error.message));
            }
            else {
                return this.response(false, 'Models type is undefined');
            }
        });
    }
}
exports.AdminInserts = AdminInserts;
