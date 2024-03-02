"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildClient(reference) {
    return reference.define('CLIENT', {
        ID: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true
        },
        EMAIL: {
            type: sequelize_1.DataTypes.STRING(55),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        PHONE_NUMBER: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        PASS_WORD: {
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: false,
        }
    });
}
exports.default = buildClient;
