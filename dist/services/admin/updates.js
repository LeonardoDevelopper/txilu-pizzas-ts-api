"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdates = void 0;
class AdminUpdates {
    constructor() {
        this.randomUUID = require("crypto");
        this.admin = require("../../models/admin/account");
    }
}
exports.AdminUpdates = AdminUpdates;
