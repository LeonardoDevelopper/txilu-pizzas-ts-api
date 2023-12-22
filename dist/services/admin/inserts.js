"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminInserts = void 0;
const server_1 = require("../../server/server");
const { randomUUID } = require("crypto");
class AdminInserts {
    constructor() {
        this.admin = server_1.Server.getDatabaseTables()[0];
        this.UUID = randomUUID;
        this.deliver = server_1.Server.getDatabaseTables()[1];
    }
    create_account(name, email, phone, password) {
        console.log('\x1b[31m%s\x1b[0m', server_1.Server.getDatabaseTables());
        return this.admin.create({
            ID: this.UUID(),
            NAME: name,
            EMAIL: email,
            PHONE_NUMBER: phone,
            PASS_WORD: password
        }).then(() => {
            console.log("User account created : )");
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
    create_deliver(ID) {
        return this.deliver.create({
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
}
exports.AdminInserts = AdminInserts;
