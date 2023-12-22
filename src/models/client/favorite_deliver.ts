import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildFavoriteDeliver(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define("FAVORITE_DEVLIVER", {
    ID: {
        type: DataTypes.STRING(36),
        primaryKey: true
    }
    })
 }