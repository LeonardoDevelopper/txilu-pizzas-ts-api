"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = __importDefault(require("../.."));
const admin = __1.default.define('ADMIN', {
    ID: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    NAME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    EMAIL: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    PHONE_NUMBER: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    PASS_WORD: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
});
exports.default = admin;
