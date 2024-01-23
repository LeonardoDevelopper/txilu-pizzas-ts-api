"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildLocalDelivery(reference) {
    return reference.define('LOCAL_DELIVERY', {
        ID: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true,
        },
        LAT: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        LON: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        NAME: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            unique: true
        }
    });
}
exports.default = buildLocalDelivery;
