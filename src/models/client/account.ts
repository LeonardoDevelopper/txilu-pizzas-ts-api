import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildClient(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('CLIENT', {
    ID: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    EMAIL:{
        type: DataTypes.STRING(55),
        allowNull: false,
        unique: true,
        validate : {
            isEmail : true
        }
    },
    PHONE_NUMBER:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    PASS_WORD:{
        type: DataTypes.STRING(15),
        allowNull: false,
    }
    })

}