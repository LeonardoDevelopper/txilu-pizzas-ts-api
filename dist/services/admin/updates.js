"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdates = void 0;
const server_1 = require("../../server/server");
const { randomUUID } = require("crypto");
class AdminUpdates {
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
    reset_password(email, password) {
        const admin = this.getTable('ADMINs');
        if (typeof admin != 'undefined') {
            return admin.update({
                PASSWORD: password
            }, { where: { EMAIL: email } })
                .then(() => {
                this.response(true, 'senha alterada com sucesso!');
            })
                .catch((error) => {
                this.response(false, error.name);
            });
        }
        return this.response(false, 'the type of model is undefined');
    }
}
exports.AdminUpdates = AdminUpdates;
