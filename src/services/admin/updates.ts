import { dbDataResponse, dbErrorResponse, res } from "../../assets/types/types"
import { Server } from '../../server/server';
const { randomUUID } = require("crypto");
import { dbTables, dbTable } from '../../assets/types/types'
import { Hooks } from 'sequelize/types/hooks';
import { Error, Model, Sequelize, where } from 'sequelize';
import { Sequence } from "mysql2/typings/mysql/lib/protocol/sequences/Sequence";
export class AdminUpdates {
  private UUID = randomUUID;
  private objResponse: any;
  private getTable (name : string) : dbTable | undefined {
    console.log(Server.getDatabaseTables())
    const aux = Server.getDatabaseTables().find((model) => name == model.getTableName())
    return aux;
  }

  private response (status : boolean, message : string,  data? : any)  {
   if (status)
   {
    return {
      OK : status,
      message : message,
      data: data
    }
   }else 
   {
    return {
      OK : false,
      messageError : message
    }
   }
  }

  public reset_password(email: string, password: string)
  {
    const admin = this.getTable('ADMINs')
    if(typeof admin != 'undefined')
    {
      return admin.update({
        PASSWORD : password
      }
      ,
     { where : {EMAIL : email}})
     .then(() => {
      this.response(true, 'senha alterada com sucesso!')
     })
     .catch((error : Error) => {
      this.response(false, error.name)
     })

    }
    return this.response(false, 'the type of model is undefined')

  }

}