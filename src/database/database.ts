import { Force } from '../server/server';

export class DataBase {
  private sequelize = require('sequelize')
  private database : any;
  constructor(
    private host : string, 
    private user : string, 
    private password : string,
    private name : string, 
    private dialect? : string, 
    private port? : number,
    ) {}
  connect() : any {
    this.database = new this.sequelize(this.name, this.user, this.password, 
      {
        host: this.host,
        dialect: this.dialect,
        port: this.port
      })
      return this.database
  }

  testConnection() : string 
  {
    return this.database.authenticate()
    .then(() => "database synchronously : )")
    .catch((error : Error) => "Error authenticating : (\n" + error.message);
  }

  build(force? : Force) : string {
    return this.database.sync( force )
    .then(() => "database buillded : )")
    .catch((error : Error) => "Error buillding database : (\n" + error.message);
  }

  model() : any {
    return this.connect();
  }
}