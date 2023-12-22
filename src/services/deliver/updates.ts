import { T_ResponseMessage } from '../../assets/types/types';

export class DeliverUpdates {
  private deliver : any = require("../../models/deliver/account")

  update_account(ID: string, photo: string, name: string, email: string, phone: string, password: string) : T_ResponseMessage {
    return this.deliver.update({
      PHOTO: photo,
      NAME: name,
      EMAIL: email, 
      PHONE_NUMBER: phone,
      PASS_WORD: password
    },
    {
      where: {ID : ID }
    })
    .then(() => {
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