import { T_ResponseMessage } from "../../assets/types/inserts"
const { randomUUID } = require("crypto");
export class AdminInserts {
  private UUID = randomUUID;
  private admin = require("../../models/admin/account");
  private deliver = require('../../database/relationships')
  
  public create_account(name: string, email: string, phone: number, password: string ) : T_ResponseMessage {
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

  public create_deliver(ID : string) : T_ResponseMessage {
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