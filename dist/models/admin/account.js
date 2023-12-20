"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = require("../../index");
exports.default = index_1.databaseModel.define('ADMIN', {
    ID: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    NAME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    EMAIL: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    PHONE_NUMBER: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    PASS_WORD: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
});
