"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildDeliverCar(reference) {
    return reference.define('CAR', {
        ID: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        NAME: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        MODEL: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        COLOR: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        }
    });
}
exports.default = buildDeliverCar;
