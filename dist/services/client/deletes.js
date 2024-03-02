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
exports.ClientDeletes = void 0;
const server_1 = require("../../server/server");
const { randomUUID } = require("crypto");
class ClientDeletes {
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
    delete_from_cart(id, clientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const cart = this.getTable('CARTs');
            if (typeof cart != 'undefined') {
                const rows_affected = yield cart.destroy({
                    where: {
                        ID: id
                    }
                });
                if (rows_affected > 0) {
                    return this.response(true, 'Pizza removed from car', yield cart.findAndCountAll({ where: { CLIENTID: clientId } }));
                }
            }
            else {
                return this.response(false, 'model is of type undefined');
            }
        });
    }
}
exports.ClientDeletes = ClientDeletes;
