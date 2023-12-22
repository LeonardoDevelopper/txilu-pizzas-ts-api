import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildAdmin(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('ADMIN', {
        ID: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        NAME: {
            type: DataTypes.STRING,
            allowNull: false
        },
        EMAIL:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        PHONE_NUMBER:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        PASS_WORD:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    })    
}
