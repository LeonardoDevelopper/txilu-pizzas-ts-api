"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildDeliverCar(reference) {
    return reference.define('CAR', {
        ID: {
            type: sequelize_1.DataTypes.STRING(25),
            allowNull: false,
            primaryKey: true
        },
        PHOTO: {
            type: sequelize_1.DataTypes.STRING,
            validate: {
                isUrl: true,
            }
        },
        NAME: {
            type: sequelize_1.DataTypes.STRING(25),
            allowNull: false,
            validate: {
                isAlphanumeric: true,
            }
        },
        MODEL: {
            type: sequelize_1.DataTypes.STRING(25),
            allowNull: false,
            validate: {
                isAlphanumeric: true,
            }
        },
        COLOR: {
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: false,
        }
    });
}
exports.default = buildDeliverCar;
