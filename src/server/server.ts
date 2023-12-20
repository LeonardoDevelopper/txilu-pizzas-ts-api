import { DataBase } from '../database/database';
export type Force = {force: boolean} | null;
export type Protocol = 'localhost' | 'http' | 'https';
export class Server {
  // declaration os props
  private express = require("express");
  private adm_routes = require("../routes/adm_routes");
  private server = new this.express();
  private port : number;
  private protocol: Protocol;
  private database : DataBase | any;

  // buillding properties  
  constructor( port: number, protocol : Protocol ) {
    this.port = port;
    this.protocol = protocol;
  }

  // server methods
  config() : void {
    this.server.use(this.express.json());
    this.server.use(this.express.urlencoded({extends: false}))
  }

  start() : string {
    this.server.listen(this.port, (error: Error) => {
      return error;
    })
    return `server is running... on ${this.protocol}:${this.port}/`;
  }

  routers() : void {
    this.server.use('', this.adm_routes);
  }
  
  // database methods
  connectDatabase(
    dbhost: string,
     dbuser: string, 
     dbpassword: string, 
     dbname: string, 
     dbdialect?: string, 
     dbport? : number
     ) : any {
    this.database = new DataBase(dbhost, dbuser, dbpassword, dbname, dbdialect, dbport);
    try {
      return this.database.connect();
    } catch (error : any) {
      return error.message;
    }
  }
  testDatabaseConnection() : string 
  {
      return this.database.testConnection();
  }
  buildDatabase(force? : Force) : string {
    return this.database.build(force);
  }
}
