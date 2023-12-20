"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deliver = void 0;
const inserts_1 = require("../deliver/inserts");
const updates_1 = require("../deliver/updates");
class Deliver {
    constructor() {
        this.inserts = new inserts_1.DeliverInserts();
        this.update = new updates_1.DeliverUpdates();
        this.deletes = new DeliverDeletes();
        this.selects = new DeliverSelects();
    }
}
exports.Deliver = Deliver;
