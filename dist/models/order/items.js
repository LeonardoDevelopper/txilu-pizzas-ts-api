"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildItems(reference) {
    return reference.define('ORDER_ITEMS', {
        ID: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true,
        },
        QUANT: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
    });
}
exports.default = buildItems;
