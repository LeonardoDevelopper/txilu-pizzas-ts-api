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
        return __awaiter(this, void 0, void 0, function* () {
            const deliver = this.getTable('DELIVERs');
            if (typeof deliver != 'undefined') {
                return yield deliver.update({
                    USERNAME: username,
                    PASS_WORD: password
                }, {
                    where: { ID: id }
                })
                    .then(([rows]) => {
                    if (rows > 0) {
                        return this.response(true, 'Deliver account updated : )');
                    }
                    else {
                        return this.response(false, 'Não conseguimos encontrar este ID');
                    }
                })
                    .catch((error) => {
                    return this.response(false, 'error updating deliver account ' + error.message);
                });
            }
            else {
                return this.response(false, 'Type of model is undefined');
            }
        });
    }
    location(id, lat, lon) {
        const deliver_location = this.getTable('DELIVER_LOCATIONs');
        if (typeof deliver_location != 'undefined') {
            return deliver_location.update({
                LAT: lat,
                LON: lon
            }, {
                where: { DELIVERID: id }
            })
                .then(([rowsEfected]) => {
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
