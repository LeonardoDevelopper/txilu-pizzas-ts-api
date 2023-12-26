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

  public create_deliver_account(ID : string) : dbResponse | res {
    const deliver = this.getTable('DELIVERs')
    const car =this.getTable('CARs')
    var dbR : dbResponse;
    if (typeof deliver != 'undefined' && typeof car != 'undefined')
    {
      dbR = deliver.create({
        ID : ID
      })
      .then(() => {
        console.log("Deliver account created : )")
        return  {
            OK: true,
            message: "Deliver account created : )"
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
  
}