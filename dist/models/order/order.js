"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildOrder(reference) {
    return reference.define('ORDER', {
        ID: {
            type: sequelize_1.DataTypes.STRING,
            primaryKey: true,
        },
        LAT: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        LON: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        DISTANCE: {
            type: sequelize_1.DataTypes.DOUBLE,
            allowNull: false
        },
        TIME: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        STATUS: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            defaultValue: "pending"
        },
    });
}
exports.default = buildOrder;
