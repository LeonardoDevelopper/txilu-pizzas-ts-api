import { DataTypes } from "sequelize"
import { databaseModel } from '../..'

export default databaseModel.define('CATEGORY',{ 
    ID:{
        type: DataTypes.STRING(36), 
        primaryKey: true,
    },
    NAME: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true

    }
})