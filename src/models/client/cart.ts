import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildCart(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('CART', {
    ID:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    QUANT: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    STATUS: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
    })

 }