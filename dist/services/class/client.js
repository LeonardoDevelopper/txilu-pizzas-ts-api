"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const deletes_1 = require("../client/deletes");
const inserts_1 = require("../client/inserts");
const selects_1 = require("../client/selects");
const updates_1 = require("../client/updates");
class Client {
    constructor() {
        this.insert = new inserts_1.ClientInserts();
        this.update = new updates_1.ClientUpdates();
        this.deletes = new deletes_1.ClientDeletes();
        this.selects = new selects_1.ClientSelects();
    }
}
exports.Client = Client;
