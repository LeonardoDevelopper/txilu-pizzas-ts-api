"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deliver = void 0;
// import { DeliverInserts } from '../deliver/inserts';
const updates_1 = require("../deliver/updates");
class Deliver {
    constructor() {
        // private inserts : DeliverInserts = new DeliverInserts();
        this.update = new updates_1.DeliverUpdates();
        // public deletes : DeliverDeletes = new DeliverDeletes();
        // public selects : DeliverSelects = new DeliverSelects();
    }
}
exports.Deliver = Deliver;
