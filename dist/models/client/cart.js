"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const sequelize_1 = require("sequelize");
exports.default = __1.databaseModel.define('CART', {
    ID: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    QUANT: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    STATUS: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});
