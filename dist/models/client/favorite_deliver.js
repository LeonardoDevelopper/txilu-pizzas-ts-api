"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = __importDefault(require("../.."));
exports.default = __1.default.define("FAVORITE_DEVLIVER", {
    ID: {
        type: sequelize_1.DataTypes.STRING(36),
        primaryKey: true
    }
});
