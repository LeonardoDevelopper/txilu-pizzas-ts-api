"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildAdminLocation(reference) {
    return reference.define('ADMIN_LOCATION', {
        ID: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true
        },
        LAT: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        LON: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        }
    });
}
exports.default = buildAdminLocation;
