import { DataTypes } from "sequelize"
import { databaseModel } from '../..'

export default databaseModel.define('DELIVER_LOCATION', {
    ID: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    LAT: {
        type: DataTypes.STRING,
        allowNull: false

    },
    LON:{
        type: DataTypes.STRING,
        allowNull: false,
    }
})
