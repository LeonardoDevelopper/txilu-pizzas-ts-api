"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("../..");
exports.default = __1.databaseModel.define('CATEGORY', {
    ID: {
        type: sequelize_1.DataTypes.STRING(36),
        primaryKey: true,
    },
    NAME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});
