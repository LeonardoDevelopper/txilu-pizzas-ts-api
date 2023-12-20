"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const inserts_1 = require("../admin/inserts");
const updates_1 = require("../admin/updates");
class Admin {
    constructor() {
        this.inserts = new inserts_1.AdminInserts();
        this.update = new updates_1.AdminUpdates();
        //public deletes : AdminDeletes = new AdminDeletes();
        //public selects : AdminSelects = new AdminSelects();
    }
}
exports.Admin = Admin;
