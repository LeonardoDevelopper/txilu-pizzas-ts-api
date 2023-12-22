"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildDeliverRate(reference) {
    return reference.define('DELIVER_RATE', {
        ID: {
            type: sequelize_1.DataTypes.STRING,
            primaryKey: true
        },
        VALUE: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        }
    });
}
exports.default = buildDeliverRate;
