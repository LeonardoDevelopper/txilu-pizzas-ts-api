import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildOrder(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('ORDER',{
    ID:{
        type: DataTypes.UUID,
        primaryKey: true,
    },
    LAT: {
        type: DataTypes.DOUBLE,
        allowNull: false

    },
    LON:{
        type: DataTypes.DOUBLE,
        allowNull: false

    },
    DISTANCE: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    TIME: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    STATUS:{
        type: DataTypes.STRING(25),
        allowNull: false,
        defaultValue: "pending"
    },
    })
 }