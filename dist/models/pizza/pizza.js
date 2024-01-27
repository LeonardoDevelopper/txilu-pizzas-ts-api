"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildPizza(reference) {
    return reference.define('PIZZA', {
        ID: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true,
        },
        PHOTO: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        },
        NAME: {
            type: sequelize_1.DataTypes.STRING(25),
            allowNull: false,
            unique: true
        },
        PRICE: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        STATUS: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            defaultValue: "alaviable"
        },
        DESC: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    });
}
exports.default = buildPizza;
