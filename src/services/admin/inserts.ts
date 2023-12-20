import { T_ResponseMessage } from "../../assets/types/inserts"

export class AdminInserts {
  private randomUUID = require("crypto");
  private admin : any = require("../../models/admin/account")
  private deliver : any = require('../../models/deliver/account');
  
  public create_account(name: string, email: string, phone: string, password: string ) : T_ResponseMessage {
    return this.admin.create({
      ID: this.randomUUID(),
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