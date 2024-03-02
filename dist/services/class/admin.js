"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const inserts_1 = require("../admin/inserts");
const selects_1 = require("../admin/selects");
const updates_1 = require("../admin/updates");
const deletes_1 = require("../admin/deletes");
class Admin {
    constructor() {
        this.inserts = new inserts_1.AdminInserts();
        this.update = new updates_1.AdminUpdates();
        this.deletes = new deletes_1.AdminDeletes();
        this.selects = new selects_1.AdminSelects();
    }
}
exports.Admin = Admin;
