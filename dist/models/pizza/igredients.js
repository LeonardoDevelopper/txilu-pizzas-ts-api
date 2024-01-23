"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildPizzaIgredients(reference) {
    return reference.define('IGREDIENT', {
        ID: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true,
        },
        NAME: {
            type: sequelize_1.DataTypes.STRING(25),
            allowNull: false
        }
    });
}
exports.default = buildPizzaIgredients;
