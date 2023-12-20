import { DataTypes } from "sequelize"
import { databaseModel } from '../..'

export default databaseModel.define('ORDER_ITEMS',{
    ID:{
        type: DataTypes.STRING,
        primaryKey: true,
    },
    QUANT: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})
