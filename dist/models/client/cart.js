"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function buildCart(reference) {
    return reference.define('CART', {
        ID: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true
        },
        QUANT: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        STATUS: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        PIZZAID: {
            type: sequelize_1.DataTypes.UUID,
            references: {
                model: 'PIZZAs',
                key: 'ID',
            },
        },
    }, {
        indexes: [
            {
                unique: true,
                fields: ['PIZZAID'],
            },
        ],
    });
}
exports.default = buildCart;
