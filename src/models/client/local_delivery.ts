import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildLocalDelivery(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('LOCAL_DELIVERY',{
        ID:{
            type: DataTypes.UUID,
            primaryKey: true,
        },
        LAT: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        LON:{
            type: DataTypes.STRING(25),
            allowNull: false
        },
        NAME:{
            type: DataTypes.STRING(25),
            allowNull: false,
            unique: true
        }
    })
 }