"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildFavoritePizza(reference) {
    return reference.define('FAVORITE_PIZZA', {
        ID: {
            type: sequelize_1.DataTypes.STRING,
            primaryKey: true,
        }
    });
}
exports.default = buildFavoritePizza;
