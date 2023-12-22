"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildPizza(reference) {
    return reference.define('PIZZA', {
        ID: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
        },
        PATH: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        NAME: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        PRICE: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        STATUS: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            defaultValue: "AVALIABLE"
        },
    });
}
exports.default = buildPizza;
