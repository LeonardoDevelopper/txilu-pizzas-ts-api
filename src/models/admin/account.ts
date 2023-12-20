import { DataTypes } from 'sequelize'
import { databaseModel } from '../../index'

export default databaseModel.define('ADMIN', {

  ID: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,        
  },
  NAME: {
      type: DataTypes.STRING,
      allowNull: false,        
  },
  EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,     
      unique: true,  
  },
  PHONE_NUMBER:{
      type: DataTypes.INTEGER,
      allowNull: false,    
      unique: true,    
  },
  PASS_WORD:{
      type: DataTypes.STRING,
      allowNull: false,        
  }
})