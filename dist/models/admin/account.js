"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildAdmin(reference) {
    return reference.define('ADMIN', {
        ID: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true
        },
        NAME: {
            type: sequelize_1.DataTypes.STRING(25),
            allowNull: false,
        },
        EMAIL: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        PHONE_NUMBER: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                isNumeric: true
            }
        },
        PASS_WORD: {
            type: sequelize_1.DataTypes.STRING(25),
            allowNull: false,
        }
    });
}
exports.default = buildAdmin;
