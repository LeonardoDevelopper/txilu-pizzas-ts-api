import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"
import { dbTable } from '../../assets/types/types'

export default function buildDeliverCar(reference : Sequelize) : dbTable
 {
    return reference.define('CAR', 
    {
      ID: {
        type: DataTypes.STRING(25),
        allowNull: false ,
        primaryKey: true
      },
      PHOTO: {
        type : DataTypes.STRING,
        validate : {
          isUrl : true,
        }
      },
      NAME: {
        type : DataTypes.STRING(25),
        allowNull : false,
        validate : {
          isAlphanumeric : true,
        }
      },
      MODEL : {
        type : DataTypes.STRING(25),
        allowNull: false,
        validate : {
          isAlphanumeric : true,
        }
      },
      COLOR : {
        type: DataTypes.STRING(15),
        allowNull: false,
      }
    })
 }