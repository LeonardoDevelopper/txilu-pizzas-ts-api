import { DataTypes } from "sequelize"
import { databaseModel } from '../..'

export default databaseModel.define('DELIVER', {
    ID: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    PHOTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue : "pendding"

  },
    NAME: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue : "pendding"

    },
    EMAIL:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        defaultValue : "pendding"

    },
    PHONE_NUMBER:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        defaultValue : "000000000"
    },
    PASS_WORD:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue : "pendding"
    }
})
