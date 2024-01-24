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
    create_deliver_account(ID, photo, firstname, lastname, email, phone) {
        const deliver = this.getTable('DELIVERs');
        const car = this.getTable('CARs');
        const deliver_location = this.getTable('DELIVER_LOCATIONs');
        if (typeof deliver != 'undefined' && typeof car != 'undefined' && typeof deliver_location != 'undefined') {
            deliver.create({
                ID: ID,
                PHOTO: photo,
                FIRST_NAME: firstname,
                LAST_NAME: lastname,
                EMAIL: email,
                PHONE_NUMBER: phone
            });
            //necessita tratamento de erro!
            deliver.addHook('afterCreate', (deliver) => {
                deliver_location.create({
                    ID: this.UUID(),
                    LAT: 0,
                    LON: 0,
                    DELIVERID: deliver.dataValues.ID,
                });
            });
        }
        return this.response(false, 'Error: model is type of undefined  : (');
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
    create_pizza(name, photo, price, status, category, igredients) {
        const pizzas = this.getTable("PIZZAs");
        const igredient = this.getTable('IGREDIENTs');
        if (typeof pizzas != 'undefined' && typeof igredient != 'undefined') {
            const pizzaID = this.UUID();
            pizzas.create({
                ID: pizzaID,
                NAME: name,
                PHOTO: photo,
                PRICE: price,
                STATUS: status,
                CATEGORYID: category
            }).then().catch((error) => { this.objResponse = this.response(false, error.message); });
            pizzas.addHook('afterCreate', (pizza) => {
                igredients.forEach((igre) => {
                    igredient.create({ ID: this.UUID(), NAME: igre, PIZZAID: pizza.dataValues.ID })
                        .then(() => { this.objResponse = this.response(false, 'Pizza created'); })
                        .catch((error) => { this.objResponse = this.response(false, error.message); });
                });
            });
        }
        else {
            this.objResponse = this.response(false, 'Models type is undefined');
        }
        // possivel bug
        return this.objResponse;
    }
}
exports.AdminInserts = AdminInserts;
