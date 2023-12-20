import { DataTypes } from "sequelize"
import { databaseModel } from '../..'

export default databaseModel.define('PIZZA_RATE',{
    ID:{
        type: DataTypes.STRING(36),
        primaryKey: true,
    },
    VALUE: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    DESC:{
        type: DataTypes.STRING,
        allowNull: true,
    },
})