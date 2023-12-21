import { Dialect, Sequelize, SequelizeScopeError, SyncOptions } from 'sequelize';
import { DataBase } from '../database/database';
export type Force = {force: boolean} | null;
export type Protocol = 'localhost' | 'http' | 'https';
export class Server {
  // declaration os props
  private static express = require("express");
  private static starter: any ;
  private static port : number;
  private static protocol: Protocol;
  private static database : Sequelize | any;
  private static adm_routes = require("./routes/adm_routes");

  // buillding properties  
  private constructor( port: number, protocol : Protocol ) {
    Server.port = port;
    Server.protocol = protocol;
  }

  // server methods
  static config() : void {
    Server.starter.use(Server.express.json());
    Server.starter.use(Server.express.urlencoded({extended: false}))
    console.log("set server config...")
    
  }
  // start server
  static start(port : number, protocol: Protocol) : string {
    Server.port = port;
    Server.protocol = protocol;
    if (Server.starter)
      return Server.starter
    else
    {
      Server.starter = new Server.express()
      Server.starter.listen(Server.port, (error: Error) => {
        return error;
      })
      console.log("Starting server...")
      return `server is running... on http://${Server.protocol}:${Server.port}/`;
    } 
  }

  static routers() : void {

    Server.starter.use('', Server.adm_routes);
    console.log("including server routes...")
  }
  
  // database methods
  static connectDatabase(
    dbhost: string,
     dbuser: string, 
     dbpassword: string, 
     dbname: string, 
     dbdialect?: Dialect, 
     dbport? : number
     ) : Sequelize | SequelizeScopeError {
      console.log("connecting server to database...")
    return Server.database = DataBase.connect(dbhost, dbuser, dbpassword, dbname, dbdialect, dbport);
    
  }
  static async testDatabaseConnection() : Promise<String> 
  {
    console.log("Testing Database Connection...")
    return await DataBase.testConnection();
  }
  
  static buildDatabase(force? : SyncOptions) : Promise<string> {
    console.log("synchroning tables... ")
    return DataBase.build(force);
  }
  static model () : Sequelize {
    return DataBase.databaseModel();
  }
  
}
