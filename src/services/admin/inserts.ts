import { dbResponse } from "../../assets/types/types"
import { Server } from '../../server/server';
const { randomUUID } = require("crypto");
import { dbTables, dbTable } from '../../assets/types/types'
export class AdminInserts {
  private admin = Server.getDatabaseTables()[0];
  private UUID = randomUUID;
  private deliver = Server.getDatabaseTables()[1];

  public create_account(name: string, email: string, phone: number, password: string ) : dbResponse {
console.log('\x1b[31m%s\x1b[0m',Server.getDatabaseTables());
    
    return this.admin.create({ 
      ID: this.UUID(),
      NAME: name,
      EMAIL: email, 
      PHONE_NUMBER: phone,
      PASS_WORD: password
    }).then(() => {
        console.log("User account created : )")   
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

  public create_deliver(ID : string) : dbResponse {
    return this.deliver.create({
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
}