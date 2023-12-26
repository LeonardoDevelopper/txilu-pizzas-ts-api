import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildAdminLocation(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('ADMIN_LOCATION', {
    ID: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    LAT: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    LON:{
        type: DataTypes.STRING(30),
        allowNull: false,
    }
    })
 }