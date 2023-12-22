import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildDeliverLocation(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('DELIVER_LOCATION', {
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
 }