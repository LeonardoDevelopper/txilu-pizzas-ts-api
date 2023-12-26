"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildDeliverLocation(reference) {
    return reference.define('DELIVER_LOCATION', {
        ID: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true
        },
        LAT: {
            type: sequelize_1.DataTypes.STRING(25),
            allowNull: false
        },
        LON: {
            type: sequelize_1.DataTypes.STRING(25),
            allowNull: false,
        }
    });
}
exports.default = buildDeliverLocation;
