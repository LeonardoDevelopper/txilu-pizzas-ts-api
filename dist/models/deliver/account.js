"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildDeliver(reference) {
    return reference.define('DELIVER', {
        ID: {
            type: sequelize_1.DataTypes.STRING(25),
            primaryKey: true
        },
        PHOTO: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true,
            }
        },
        USERNAME: {
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: false,
            defaultValue: "username",
            validate: {
                isAlphanumeric: true
            }
        },
        FIRST_NAME: {
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: false,
            validate: {
                isAlpha: true
            }
        },
        LAST_NAME: {
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: false,
            validate: {
                isAlpha: true
            }
        },
        EMAIL: {
            type: sequelize_1.DataTypes.STRING(35),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
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
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: false,
            defaultValue: "pendding",
        }
    });
}
exports.default = buildDeliver;
