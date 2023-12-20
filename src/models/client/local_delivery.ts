import { databaseModel } from '../..'
import  { DataTypes } from "sequelize"

export default databaseModel.define('LOCAL_DELIVERY',{
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
    NAME:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})