import { res } from "../../assets/types/types"
import { Server } from '../../server/server';
const { randomUUID } = require("crypto");
import { dbTables, dbTable } from '../../assets/types/types'
import { order } from "paypal-rest-sdk";
import { Item } from "../../server/api/paypal";
export class ClientInserts {
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
  public create_account(
    
    email: string, phone: number, password: string
   ) {
    const client = this.getTable("CLIENTs")
    if(typeof client != "undefined")
    {
      return client.create({
        ID: this.UUID(),
        EMAIL: email, 
        PHONE_NUMBER: phone,
        PASS_WORD: password
      }).then((data) => {
          return this.response(true, 'User created successfully : )', data)
      })
      .catch((error : Error) => {
          return this.response(false, 'Error: ' + error.message)
      })
    }
    else {
      return this.response(false, 'type of model is undefined')
    }
  }

  public add_to_cart(clientID : string, pizzaID : string)  {
    const cart = this.getTable('CARTs');
    if(typeof cart != 'undefined')
    {
      return cart.create({
        ID: this.UUID(),
        QUANT : 1,
        STATUS : 1,
        PIZZAID: pizzaID,
        CLIENTID : clientID,
      })
      .then(() => {
        return this.response(true, 'Pizza add to cart successfully : )')
      })
      .catch((error : Error) => {
          return this.response(false, 'Error: ' + error.name)
      })
    }
    return this.response(false, 'type of model is undefined')
  }

  public send_order(lat : string, lon : string, distance : number, time : number, status : string, clienetID : string)  {
    const orders = this.getTable('ORDERs');
    const item_orders = this.getTable('ORDER_ITEMs');
    if(typeof orders != 'undefined' && typeof item_orders != 'undefined')
    {
      return orders.create({
        ID : randomUUID(),
        LAT : lat,
        LON : lon,
        DISTANCE : distance,
        TIME : time,
        STATUS : status,
        CLIENTID : clienetID,
      })
      .then((data) => {
        return this.response(true, 'criado' ,data)
        
      })
      .catch((error : Error) => {
        console.log(error)
          return this.response(false, 'Error: ' + error.name)
      })
    }
    return this.response(false, 'type of model is undefined')
  }


  public async  add_order_items (items : Array<Item>, orderID : string)  {
    const item_orders = this.getTable('ORDER_ITEMs');
    if(typeof item_orders != 'undefined')
    {
      let result = [];
      for (const item of items) {
         result.push(await item_orders.create({
          ID: randomUUID(),
          QUANT : item.quantity,
          ORDERID : orderID,
          PIZZAID : item.sku
        })
        .then((data) => {
          return this.response(true, 'criado' ,data)
          
        })
        .catch((error : Error) => {
          console.log(error)
            return this.response(false, 'Error: ' + error.name)
        }))
        
      }
      
      return result[ result.length -1 ].OK ? this.response(true, 'Items added successfully') : this.response(false, 'Cannot add items');
    }
    return this.response(false, 'type of model is undefined')
  }

  

}