"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("../..");
exports.default = __1.databaseModel.define('PIZZA_RATE', {
    ID: {
        type: sequelize_1.DataTypes.STRING(36),
        primaryKey: true,
    },
    VALUE: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    DESC: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
});
