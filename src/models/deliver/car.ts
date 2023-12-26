import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"
import { dbTable } from '../../assets/types/types'

export default function buildDeliverCar(reference : Sequelize) : dbTable
 {
    return reference.define('CAR', 
    {
      ID: {
        type: DataTypes.UUID,
        allowNull: false ,
        primaryKey: true
      },
      NAME: {
        type : DataTypes.STRING,
        allowNull : false,
      },
      MODEL : {
        type : DataTypes.STRING,
        allowNull: false,
      },
      COLOR : {
        type: DataTypes.STRING,
        allowNull: false 
      }
    })
 }