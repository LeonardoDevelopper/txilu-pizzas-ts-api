import { DataTypes } from "sequelize"
import { databaseModel } from '../..'

export default databaseModel.define('ORDER',{
    ID:{
        type: DataTypes.STRING,
        primaryKey: true,
    },
    LAT: {
        type: DataTypes.STRING,
        allowNull: false

    },
    LON:{
        type: DataTypes.STRING,
        allowNull: false

    },
    DISTANCE: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    TIME: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    STATUS:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pending"
    },
})
