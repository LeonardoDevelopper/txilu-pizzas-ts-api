import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildDeliver(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('DELIVER', {
    ID: {
        type: DataTypes.STRING(25),
        primaryKey: true
    },
    PHOTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue : "https://google.com/pendding.png",
      validate : {
        isUrl: true,
      }

  },
    NAME: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue : "pendding",
        validate: {
            isAlpha : true 
        }

    },
    EMAIL:{
        type: DataTypes.STRING(35),
        allowNull: false,
        unique: true,
        defaultValue : "pendding@gmail.com",
        validate : {
            isEmail  : true,
        }
    },
    PHONE_NUMBER:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        defaultValue : "000000000",
        validate:{
            isNumeric : true
        }
    },
    PASS_WORD:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue : "pendding",
    }
})

 }