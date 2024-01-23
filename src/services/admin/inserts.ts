import { dbDataResponse, dbErrorResponse, res } from "../../assets/types/types"
import { Server } from '../../server/server';
const { randomUUID } = require("crypto");
import { dbTables, dbTable } from '../../assets/types/types'
import { Hooks } from 'sequelize/types/hooks';
import { Error, Model, Sequelize } from 'sequelize';
import { Sequence } from "mysql2/typings/mysql/lib/protocol/sequences/Sequence";
export class AdminInserts {
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
  public create_account(name: string, email: string, phone: number, password: string ) {
    const admin = this.getTable('ADMINs')
    if(typeof admin != 'undefined')
    {
      return admin.create({ 
        ID: this.UUID(),
        NAME: name,
        EMAIL: email, 
        PHONE_NUMBER: phone,
        PASS_WORD: password
      }).then( (data) => {
        return this.response(true, 'User account created : )', data)
      })
      .catch((error : Error) => {
        return this.response(false, error.name)
      })
    }
    return this.response(false, 'Error: model is type of undefined  : (')
  }

  public set_admin_location(lat : string, lon : string, adminID : string)  {
    const admin_location = this.getTable('ADMIN_LOCATIONs')
    if(typeof admin_location != 'undefined')
    {
      return admin_location.create(
        {
          ID: this.UUID(),
          LAT: lat,
          LON: lon,
          ADMINID: adminID
        }
      ).then(() => {
        return this.response(true, 'Admin location updated successfully')
      }).catch((error) => {
        return this.response(false, 'Error:'+ error.message)
      })
    }else{
      return this.response(false, 'Error: model is type of undefined  : (')
    }
  }

  public create_deliver_account(
    ID : string, photo : URL, 
    firstname: string, lastname: string, 
    email: string, phone: number, 
    )  {
    const deliver = this.getTable('DELIVERs')
    const car =this.getTable('CARs')
    const deliver_location = this.getTable('DELIVER_LOCATIONs')
    if (typeof deliver != 'undefined' && typeof car != 'undefined' && typeof deliver_location != 'undefined')
    {
      deliver.create({
        ID : ID,
        PHOTO: photo,
        FIRST_NAME: firstname,
        LAST_NAME : lastname,
        EMAIL: email,
        PHONE_NUMBER : phone
      })
      //necessita tratamento de erro!
      deliver.addHook('afterCreate', (deliver) => {
        deliver_location.create({
          ID: this.UUID(),
          LAT: 0,
          LON: 0,
          DELIVERID: deliver.dataValues.ID,
        }) 
      })
    }
    return this.response(false, 'Error: model is type of undefined  : (')
  }

  public create_pizza_category(name : string) 
  {
    const category = this.getTable("CATEGORies");
    console.log(category)
    if (typeof category != 'undefined')
    {
      return category.create({
        ID: this.UUID(),
        NAME: name
      })
      .then(() => 
      {
        return this.response(true, "Pizza category created : )")
        }).catch((error : Error) => {
          return this.response(false, error.message)
      })
    }
    return this.response(false, "Error: model is type of undefined  : (")
  }
  
  public create_pizza(name: string, photo: URL, price : number, status : string, category : string, igredients : Array<string>)  {
    const pizzas = this.getTable("PIZZAs");
    const igredient = this.getTable('IGREDIENTs');

    if (typeof pizzas != 'undefined' &&  typeof igredient != 'undefined')
    {
      const pizzaID = this.UUID();
        pizzas.create({
          ID: pizzaID,
          NAME: name,
          PHOTO: photo,
          PRICE: price,
          STATUS: status,
          CATEGORYID : category
        }).then().catch((error : Error) => {this.objResponse = this.response(false, error.message)})

        pizzas.addHook('afterCreate', (pizza) => {
          igredients.forEach((igre) => {
            igredient.create({ ID: this.UUID(), NAME: igre, PIZZAID: pizza.dataValues.ID})
            .then(( ) => {this.objResponse = this.response(false, 'Pizza created')})
            .catch((error : Error) => {this.objResponse = this.response(false, error.message)})
          })
        })
    }else{
      this.objResponse = this.response(false, 'Models type is undefined')
    }
    // possivel bug
    return this.objResponse
  }
  
}