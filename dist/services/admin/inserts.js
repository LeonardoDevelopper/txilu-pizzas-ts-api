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
    create_deliver_account(ID) {
        const deliver = this.getTable('DELIVERs');
        const car = this.getTable('CARs');
        var dbR;
        if (typeof deliver != 'undefined' && typeof car != 'undefined') {
            dbR = deliver.create({
                ID: ID
            })
                .then(() => {
                console.log("Deliver account created : )");
                return {
                    OK: true,
                    message: "Deliver account created : )"
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
}
exports.AdminInserts = AdminInserts;
