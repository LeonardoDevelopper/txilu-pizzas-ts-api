"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const inserts_1 = require("../client/inserts");
class Client {
    constructor() {
        this.inserts = new inserts_1.ClientInserts();
        this.update = new ClientUpdates();
        this.deletes = new ClientDeletes();
        this.selects = new ClientSelects();
    }
}
exports.Client = Client;
