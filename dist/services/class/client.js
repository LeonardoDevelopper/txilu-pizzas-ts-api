"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const inserts_1 = require("../client/inserts");
class Client {
    constructor() {
        this.inserts = new inserts_1.ClientInserts();
        // public update :  ClientUpdates = new ClientUpdates();
        // public deletes : ClientDeletes = new ClientDeletes();
        // public selects : ClientSelects = new ClientSelects();
    }
}
exports.Client = Client;
