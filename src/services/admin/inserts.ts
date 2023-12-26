import { dbResponse, res } from "../../assets/types/types"
import { Server } from '../../server/server';
const { randomUUID } = require("crypto");
import { dbTables, dbTable } from '../../assets/types/types'
export class AdminInserts {
  private UUID = randomUUID;

  private getTable (name : string) : dbTable | undefined {
    console.log(Server.getDatabaseTables())
    const aux = Server.getDatabaseTables().find((model) => name == model.getTableName())
    return aux;
  }

  public create_account(name: string, email: string, phone: number, password: string ) : dbResponse | res {
    const admin = this.getTable('ADMINs')
    if(typeof admin != 'undefined')
    {
      return admin.create({ 
        ID: this.UUID(),
        NAME: name,
        EMAIL: email, 
        PHONE_NUMBER: phone,
        PASS_WORD: password
      }).then( (model) => {
          console.log("User account created : )" + model)
          return  {
              OK: true,
              message: "User account created : )"
          }
      })
      .catch((error : Error) => {
          console.log(error.message+ " : (")
          return {
              OK: false,
              messageError: error.name + " : ("
          }
      })
    }
    return {
      OK: false,
      messageError:  "Error: model is type of undefined  : ("
    }
  }

  public create_deliver_account(
    ID : string, board : string,  
    carPhoto : URL, color : string, 
    name : string, model: string ) : dbResponse | res {
    const deliver = this.getTable('DELIVERs')
    const car =this.getTable('CARs')
    if (typeof deliver != 'undefined' && typeof car != 'undefined')
    {
      return deliver.create({
        ID : ID
      })
      .then((deliver) => {
        return car.create({
          ID: board,
          PHOTO: carPhoto,
          NAME: name,
          MODEL : model,
          COLOR : color,
          DELIVERID : ID
        }).then(() => 
        {
          return  {
            OK: true,
            message: "Deliver account created : )"
          }
          }).catch((error : Error) => {
            return {
              OK: false,
              messageError: error.message + " : ("
          }
          })
        
      })
      .catch((error : Error) => {
        console.log(error.message+ " : (")
        return {
            OK: false,
            messageError: error.message + " : ("
        }
      })
      
    }
    return {
      OK: false,
      messageError:  "Error: model is type of undefined  : ("
    }
  }

  public create_pizza_category(name : string) : dbResponse | res
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
        return  {
          OK: true,
          message: "Pizza category created : )"
        }
        }).catch((error : Error) => {
          return {
            OK: false,
            messageError: error.message + " : ("
        }
      })
    }
    return {
      OK: false,
      messageError:  "Error: model is type of undefined  : ("
    }
  }

  public create_pizza(name: string, photo: URL, price : number, status : string, category : string, igredients : Array<string>) : dbResponse | res {
    const pizzas = this.getTable("PIZZAs");
    if (typeof pizzas != 'undefined')
    {
      const pizzaID = this.UUID();
      return pizzas.create({
        ID: pizzaID,
        NAME: name,
        PHOTO: photo,
        PRICE: price,
        STATUS: status,
        CATEGORYID : category
      })
      .then(() => 
      {
        const ingredient = this.getTable('IGREDIENTs');
        if(typeof ingredient != 'undefined')
        {

          igredients.forEach((igre) => {
            ingredient.create({NAME: igre, PIZZAID: pizzaID})
          })
          console.log("pizza created : )")  
        }
        return  {
          OK: true,
          message: "Pizza created : )"
        }
        }).catch((error : Error) => {
          return {
            OK: false,
            messageError: error.message + " : ("
        }
      })
    }
    return {
      OK: false,
      messageError:  "Error: model is type of undefined  : ("
    }
  }
  
}