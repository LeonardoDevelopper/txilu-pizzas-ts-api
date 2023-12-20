"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const sequelize_1 = require("sequelize");
exports.default = __1.databaseModel.define('LOCAL_DELIVERY', {
    ID: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    LAT: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    LON: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    NAME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});
