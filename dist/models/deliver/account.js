"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("../..");
exports.default = __1.databaseModel.define('DELIVER', {
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
        defaultValue: "pendding"
    },
    PASS_WORD: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: "pendding"
    }
});