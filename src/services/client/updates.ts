import {  res } from "../../assets/types/types"
import { Server } from '../../server/server';
const { randomUUID } = require("crypto");
import { dbTables, dbTable } from '../../assets/types/types'
export class ClientUpdates {
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
   public update_order_status(orderID : string)
   {
    const orders = this.getTable('ORDERs');
    if(typeof orders != 'undefined')
    {
        return orders.update({STATUS : 'Paid'}, {where : {ID : orderID}})
        .then((rows) => this.response(true, 'Pagamento efectuado com sucesso!' , rows) )
        .catch((error) => this.response(false, error.message))
    }
    else{
        return this.response(false, 'The model is of type undefinded')
    }
   }


}