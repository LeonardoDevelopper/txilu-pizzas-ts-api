import {  res } from "../../assets/types/types"
import { Server } from '../../server/server';
const { randomUUID } = require("crypto");
import { dbTables, dbTable } from '../../assets/types/types'

export class DeliverInserts {


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

   public set_deliver_location(deliverId : string, lat : string, lon : string)
   {
        const location = this.getTable('DELIVER_LOCATIONs');
        if(typeof location != 'undefined')
        {
        return location.create(
            {
            ID: randomUUID(),
            LAT: lat,
            LON: lon,
            DELIVERID: deliverId
            }
        ).then((data) => {
          if(data)
          {
            return this.response(true, 'deliver location seted successfully')

          }
            else 
              return this.response(false, 'someThing went wrong')
        }).catch((error) => {
            return this.response(false, 'Error:'+ error.message)
        })
        }else{
        return this.response(false, 'Error: model is type of undefined  : (')
        }
    }

}