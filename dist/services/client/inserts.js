"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientInserts = void 0;
class ClientInserts {
    constructor() {
        this.randomUUID = require("crypto");
        this.client = require("../../models/client/account");
    }
    create_account(name, email, phone, password) {
        return this.client.create({
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
}
exports.ClientInserts = ClientInserts;
