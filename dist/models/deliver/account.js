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
            defaultValue: "https://google.com/pendding.png",
            validate: {
                isUrl: true,
            }
        },
        NAME: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            defaultValue: "pendding",
            validate: {
                isAlpha: true
            }
        },
        EMAIL: {
            type: sequelize_1.DataTypes.STRING(35),
            allowNull: false,
            unique: true,
            defaultValue: "pendding@gmail.com",
            validate: {
                isEmail: true,
            }
        },
        PHONE_NUMBER: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            defaultValue: "000000000",
            validate: {
                isNumeric: true
            }
        },
        PASS_WORD: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            defaultValue: "pendding",
        }
    });
}
exports.default = buildDeliver;
