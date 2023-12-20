import { ResponseMessage, ResponseMessageError } from '../../assets/interface/inserts';
import { T_ResponseMessage } from '../../assets/types/inserts';

export class DeliverUpdates {
  private deliver : any = require("../../models/deliver/deliver")

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
    }
    )
  }
}