"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const inserts_1 = require("../admin/inserts");
const updates_1 = require("../admin/updates");
class Admin {
    constructor() {
        this.admin = require("../models/admin/account");
        this.inserts = new inserts_1.AdminInserts();
        this.update = new updates_1.AdminUpdates();
        this.deletes = new AdminDeletes();
        this.selects = new AdminSelects();
    }
}
exports.Admin = Admin;
