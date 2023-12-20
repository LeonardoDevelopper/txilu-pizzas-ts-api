import { databaseModel } from '../..'
import  { DataTypes } from "sequelize"

export default databaseModel.define('FAVORITE_PIZZA',{
    ID:{
        type: DataTypes.STRING,
        primaryKey: true,
    },
})