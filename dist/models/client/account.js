"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildClient(reference) {
    return reference.define('CLIENT', {
        ID: {
            type: sequelize_1.DataTypes.STRING,
            primaryKey: true
        },
        NAME: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        EMAIL: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        PHONE_NUMBER: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        PASS_WORD: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        }
    });
}
exports.default = buildClient;
