"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminInserts = void 0;
class AdminInserts {
    constructor() {
        this.randomUUID = require("crypto");
        this.admin = require("../../models/admin/account");
        this.deliver = require('../../models/deliver/account');
    }
    create_account(name, email, phone, password) {
        return this.admin.create({
            ID: this.randomUUID(),
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
