"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildCategory(reference) {
    return reference.define('CATEGORY', {
        ID: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true,
        },
        NAME: {
            type: sequelize_1.DataTypes.STRING(25),
            allowNull: false,
            unique: true
        }
    });
}
exports.default = buildCategory;
