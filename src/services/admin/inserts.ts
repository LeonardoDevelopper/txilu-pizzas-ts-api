import { T_ResponseMessage } from "../../assets/types/inserts"
import deliver from '../../models/deliver/account';

export class AdminInserts {
  private randomUUID = require("crypto");
  private admin = require("../../models/admin/account")
  
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

  public create_deliver(ID : string) : ResponseMessage | ResponseMessageError {
    return deliver.create({
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