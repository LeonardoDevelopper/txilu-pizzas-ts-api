"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = __importDefault(require("../.."));
const deliver = __1.default.define('DELIVER', {
    ID: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    PHOTO: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: "pendding"
    },
    NAME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: "pendding"
    },
    EMAIL: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        defaultValue: "pendding"
    },
    PHONE_NUMBER: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        defaultValue: "000000000"
    },
    PASS_WORD: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: "pendding"
    }
});
exports.default = deliver;
