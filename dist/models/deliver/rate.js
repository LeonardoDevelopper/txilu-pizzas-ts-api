"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildDeliverRate(reference) {
    return reference.define('DELIVER_RATE', {
        ID: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true
        },
        VALUE: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        DESC: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        }
    });
}
exports.default = buildDeliverRate;
