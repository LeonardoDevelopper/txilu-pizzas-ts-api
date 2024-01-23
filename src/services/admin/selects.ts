
import {  res } from "../../assets/types/types"
import { Server } from '../../server/server';
const { randomUUID } = require("crypto");
import { dbTables, dbTable } from '../../assets/types/types'
import { Hooks } from 'sequelize/types/hooks';
import { Error, Model, Op, Sequelize } from 'sequelize';

export class AdminSelects {

  private UUID = randomUUID;
  private objResponse: any;
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
       OK : status,
       messageError : message
     }
    }
   }

  async getAccount(any : string | number, password : string)  {
    const admins = this.getTable('ADMINs')
    if(typeof admins != 'undefined')
    { 
      return await admins.findOne({
        where: {
          [Op.or]: [
            { EMAIL: any },
            { PHONE_NUMBER: any },
          ],
          PASS_WORD: password,
        }
      })
      .then((data) => data ? this.response(true, 'Logado com sucesso!', data) : this.response(true, 'Email ou senha errada'))
      .catch((error : Error) => this.response(false, error.name))

    }
    return this.response(false, 'Error: model is type of undefined  : (')
  }

}