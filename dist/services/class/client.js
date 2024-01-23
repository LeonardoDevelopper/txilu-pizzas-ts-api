"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const inserts_1 = require("../client/inserts");
const selects_1 = require("../client/selects");
class Client {
    constructor() {
        this.insert = new inserts_1.ClientInserts();
        // public update :  ClientUpdates = new ClientUpdates();
        // public deletes : ClientDeletes = new ClientDeletes();
        this.selects = new selects_1.ClientSelects();
    }
}
exports.Client = Client;
