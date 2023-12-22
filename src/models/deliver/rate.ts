import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildDeliverRate(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('DELIVER_RATE', {
    ID: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    VALUE:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    })
 }