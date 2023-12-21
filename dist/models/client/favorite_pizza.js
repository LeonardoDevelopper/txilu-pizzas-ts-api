"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require("../.."));
const sequelize_1 = require("sequelize");
exports.default = __1.default.define('FAVORITE_PIZZA', {
    ID: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
});
