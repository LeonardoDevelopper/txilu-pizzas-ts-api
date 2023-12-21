import { Dialect, Sequelize, SyncOptions } from 'sequelize';
import { Force } from '../server/server';

export class DataBase {
  private static sequelize = require('sequelize')
  private static connection : Sequelize
  private constructor(  
    private host : string, 
    private user : string, 
    private password : string,
    private name : string, 
    private dialect? : string, 
    private port? : number,
    ) {}
  static connect( 
     host : string, 
     user : string, 
     password : string,
     name : string, 
     dialect? : Dialect, 
     port? : number,) : Sequelize {
      if (DataBase.connection)
        return DataBase.connection;
      return DataBase.connection = new Sequelize(name, user, password, 
      {
        host: host,
        dialect: dialect,
        port: port
      })
  }

  static async testConnection() : Promise<string> 
  {
    return await DataBase.connection.authenticate()
    .then(() => "database synchronously : )")
    .catch((error : Error) => "Error authenticating : (\n" + error.message);
  }

  static build(force? : SyncOptions) : Promise<string> {
    return DataBase.connection.sync( force )
    .then(() => "database buillded : )")
    .catch((error : Error) => "Error buillding database : (\n" + error.message);
  }

  static databaseModel() : Sequelize {
    return DataBase.connection;
  }
}