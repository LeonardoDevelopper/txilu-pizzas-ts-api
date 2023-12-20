import { DataTypes } from "sequelize"
import { databaseModel } from '../..'

export default databaseModel.define('DELIVER_RATE', {
    ID: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    VALUE:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})