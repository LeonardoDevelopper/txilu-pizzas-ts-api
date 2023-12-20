"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("../..");
exports.default = __1.databaseModel.define('ADMIN_LOCATION', {
    ID: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    LAT: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    LON: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
});
