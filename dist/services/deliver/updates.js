"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliverUpdates = void 0;
class DeliverUpdates {
    constructor() {
        this.deliver = require("../../models/deliver/account");
    }
    update_account(ID, photo, name, email, phone, password) {
        return this.deliver.update({
            PHOTO: photo,
            NAME: name,
            EMAIL: email,
            PHONE_NUMBER: phone,
            PASS_WORD: password
        }, {
            where: { ID: ID }
        })
            .then(() => {
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
exports.DeliverUpdates = DeliverUpdates;
