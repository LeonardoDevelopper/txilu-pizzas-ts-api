import {  res, dbDataResponse } from "../../assets/types/types"
import { Server } from '../../server/server';
const { randomUUID } = require("crypto");
import { dbTables, dbTable } from '../../assets/types/types'
import { Model } from 'sequelize';
export class ClientDeletes {
  private UUID = randomUUID;

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

   public async delete_from_cart(id : string, clientId : string)
   {
    const cart = this.getTable('CARTs')
    if(typeof cart != 'undefined')
    {
        const rows_affected = await cart.destroy(
            {
                where : {
                    ID : id
                }
            }
        )
        if(rows_affected > 0)
        {
            return this.response(true, 'Pizza removed from car' , await cart.findAndCountAll({where : {CLIENTID : clientId}}) )
        }
    }
    else{
        return this.response(false, 'model is of type undefined')
    }
   }
   

}