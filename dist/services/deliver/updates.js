"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliverUpdates = void 0;
const server_1 = require("../../server/server");
const { randomUUID } = require("crypto");
class DeliverUpdates {
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
    account(id, username, password) {
        const deliver = this.getTable('DELIVERs');
        if (typeof deliver != 'undefined') {
            return deliver.update({
                USERNAME: username,
                PASS_WORD: password
            }, {
                where: { ID: id }
            })
                .then(() => {
                return this.response(true, 'Deliver account updated : )');
            })
                .catch((error) => {
                return this.response(false, 'error updating delver account ' + error.message);
            });
        }
        else {
            return this.response(false, 'Type of model is undefined');
        }
    }
    location(id, lat, lon) {
        const deliver_location = this.getTable('DELIVER_LOCATIONs');
        if (typeof deliver_location != 'undefined') {
            return deliver_location.update({
                ID: this.UUID(),
                LAT: lat,
                LON: lon
            }, {
                where: { DELIVERID: id }
            })
                .then(() => {
                return this.response(true, 'Deliver location updated : )');
            })
                .catch((error) => {
                return this.response(false, 'error updating deliver location ' + error.message);
            });
        }
        else {
            return this.response(false, 'Type of model is undefined');
        }
    }
}
exports.DeliverUpdates = DeliverUpdates;
