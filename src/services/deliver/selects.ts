import {  res } from "../../assets/types/types"
import { Server } from '../../server/server';
const { randomUUID } = require("crypto");
import { dbTables, dbTable } from '../../assets/types/types'
export class DeliverSelects {


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

   public async request_account(email : string){
    const delivers = this.getTable('DELIVERs')
    if(typeof delivers != 'undefined')
    {
      return await delivers.findOne({
        attributes : [ 'id', 'photo', 'email', 'FIRST_NAME'],
        where : {email : email}
      })
      .then((data) => {
        if(data)
        {
          return this.response(true, 'Conta encontrada', data)

        }
        else
        {
          return this.response(false, 'We Was not able find your account ')
        }
      })
      .catch((error : Error) => {
        return this.response(false, error.message)

      })
    }
    else
    {
      this.response(false, 'Model is of type undefined')
    }
   }

   public async get_stores(){
    const admins = this.getTable('ADMINs')
    const locations = this.getTable('ADMIN_LOCATIONs')
    if(typeof locations != 'undefined' && typeof admins != 'undefined')
    {
      return await admins.findAll({
        attributes : ['id', 'name'],
        include : {model : locations, attributes : ['LAT', 'LON']}

      },
    ).then((data) => {
        if(data)
        {
          return this.response(true, 'Lojas', data)

        }
        else
        {
          return this.response(false, 'Nenhuma loja encontrada ')
        }
      })
      .catch((error : Error) => {
        return this.response(false, error.message)

      })
    }
    else
    {
      return this.response(false, 'Model is of type undefined')
    }
   }

}