import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildLocalDelivery(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('LOCAL_DELIVERY',{
        ID:{
            type: DataTypes.STRING,
            primaryKey: true,
        },
        LAT: {
            type: DataTypes.STRING,
            allowNull: false
        },
        LON:{
            type: DataTypes.STRING,
            allowNull: false
        },
        NAME:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    })
 }