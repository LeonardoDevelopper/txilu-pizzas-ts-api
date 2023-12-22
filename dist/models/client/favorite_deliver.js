"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildFavoriteDeliver(reference) {
    return reference.define("FAVORITE_DEVLIVER", {
        ID: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true
        }
    });
}
exports.default = buildFavoriteDeliver;
