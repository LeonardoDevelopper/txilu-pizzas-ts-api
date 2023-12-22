import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildCategory(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('CATEGORY',{ 
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

 }