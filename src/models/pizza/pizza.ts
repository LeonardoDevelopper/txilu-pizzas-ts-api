import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildPizza(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('PIZZA',{
    ID:{
        type: DataTypes.STRING(36),
        primaryKey: true,
    },
    PATH: {
        type: DataTypes.STRING,
        allowNull: false

    },
    NAME:{
        type: DataTypes.STRING,
        allowNull: false

    },
    PRICE: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    STATUS:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "AVALIABLE"
    },
    })

}