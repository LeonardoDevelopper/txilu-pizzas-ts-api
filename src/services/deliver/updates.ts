import {  res } from "../../assets/types/types"
import { Server } from '../../server/server';
const { randomUUID } = require("crypto");
import { dbTables, dbTable } from '../../assets/types/types'
export class DeliverUpdates {
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
  public async account(id: string, username: string, password: string) {
    const deliver = this.getTable('DELIVERs')
    if(typeof deliver != 'undefined') {

      return await deliver.update({
        USERNAME: username,
        PASS_WORD: password
      },
      {
        where: {ID : id }
      })
      .then(([rows]) => {
        if(rows > 0)
        {
          return this.response(true, 'Deliver account updated : )')

        }
        else{
          return this.response(false, 'Não conseguimos encontrar este ID')

        }
      })
      .catch((error : Error) => {
        return this.response(false, 'error updating deliver account '+ error.message)
      })
    }
    else
    {
      return this.response(false, 'Type of model is undefined')
    }
  }

  public location(id: string, lat: number, lon: number) {
    const deliver_location = this.getTable('DELIVER_LOCATIONs')
    if(typeof deliver_location != 'undefined') {

      return deliver_location.update({
        LAT : lat,
        LON : lon
      },
      {
        where: {DELIVERID : id }
      })
      .then(([rowsEfected]) => {
        return this.response(true, 'Deliver location updated : )')
      })
      .catch((error : Error) => {
        return this.response(false, 'error updating deliver location '+ error.message)
      })
    }
    else
    {
      return this.response(false, 'Type of model is undefined')
    }
  
  }

}