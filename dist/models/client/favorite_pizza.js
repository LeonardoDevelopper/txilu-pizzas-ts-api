"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const sequelize_1 = require("sequelize");
exports.default = __1.databaseModel.define('FAVORITE_PIZZA', {
    ID: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
});
