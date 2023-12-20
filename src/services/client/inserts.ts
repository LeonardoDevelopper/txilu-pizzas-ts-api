import { ResponseMessage, ResponseMessageError } from '../../assets/interface/inserts';

export class ClientInserts {

  private randomUUID = require("crypto");
  private client : any = require("../../models/client/client");
  
  public create_account(name: string, email: string, phone: string, password: string ) : ResponseMessage | ResponseMessageError {
    return this.client.create({
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
}