"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("../..");
exports.default = __1.databaseModel.define('ORDER_ITEMS', {
    ID: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    QUANT: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
});
