import  { DataTypes } from "sequelize"
import  databaseModel from '../..'

export default  databaseModel.define("FAVORITE_DEVLIVER", {
    ID: {
        type: DataTypes.STRING(36),
        primaryKey: true
    }
})