"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deliver = void 0;
// import { DeliverInserts } from '../deliver/inserts';
const updates_1 = require("../deliver/updates");
const selects_1 = require("../deliver/selects");
const inserts_1 = require("../deliver/inserts");
class Deliver {
    constructor() {
        this.inserts = new inserts_1.DeliverInserts();
        this.update = new updates_1.DeliverUpdates();
        // public deletes : DeliverDeletes = new DeliverDeletes();
        this.selects = new selects_1.DeliverSelects();
    }
}
exports.Deliver = Deliver;
