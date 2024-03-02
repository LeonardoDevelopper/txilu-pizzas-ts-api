import { Server } from "../../server/server";
import { dbTable } from "../../assets/types/types";

export class AdminDeletes {

  private objResponse!: {
    OK: true;
    message: string;
    data: any;
    messageError?: undefined;
} | {
    OK: boolean;
    messageError: string;
    message?: undefined;
    data?: undefined;
};
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

  public delete_pizza(id : string)
  {
    const pizza = this.getTable('PIZZAs')
    if(typeof pizza != 'undefined')
    {
        return pizza.destroy(
            {
                where : {
                    ID: id
                }
            }
        )
        .then(() => this.response(true, 'Pizza excluída com sucesso'))
        .catch((error : Error) => this.response(false, error.message))
    }
  }
}