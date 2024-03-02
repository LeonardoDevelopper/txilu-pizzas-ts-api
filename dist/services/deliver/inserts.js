"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliverInserts = void 0;
const server_1 = require("../../server/server");
const { randomUUID } = require("crypto");
class DeliverInserts {
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
    set_deliver_location(deliverId, lat, lon) {
        const location = this.getTable('DELIVER_LOCATIONs');
        if (typeof location != 'undefined') {
            return location.create({
                ID: randomUUID(),
                LAT: lat,
                LON: lon,
                DELIVERID: deliverId
            }).then((data) => {
                if (data) {
                    return this.response(true, 'deliver location seted successfully');
                }
                else
                    return this.response(false, 'someThing went wrong');
            }).catch((error) => {
                return this.response(false, 'Error:' + error.message);
            });
        }
        else {
            return this.response(false, 'Error: model is type of undefined  : (');
        }
    }
}
exports.DeliverInserts = DeliverInserts;
