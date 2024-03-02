import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildDeliverLocation(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('DELIVER_LOCATION', {
    ID: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    LAT: {
        type: DataTypes.DOUBLE,
        allowNull: false

    },
    LON:{
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
    })
 }