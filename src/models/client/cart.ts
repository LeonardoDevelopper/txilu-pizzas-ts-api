import { databaseModel } from '../..'
import  { DataTypes } from "sequelize"

export default databaseModel.define('CART', {
    ID:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    QUANT: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    STATUS: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})