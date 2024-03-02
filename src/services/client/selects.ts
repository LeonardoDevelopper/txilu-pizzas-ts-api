import {  res, dbDataResponse } from "../../assets/types/types"
import { Server } from '../../server/server';
const { randomUUID } = require("crypto");
import { dbTables, dbTable } from '../../assets/types/types'
import { Model, Op } from 'sequelize';
export class ClientSelects {
  private UUID = randomUUID;

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

  public get_pizzas() {
    const pizzas = this.getTable('PIZZAs')
    const category = this.getTable('CATEGORies')
    if (typeof pizzas != 'undefined' && typeof category != 'undefined')
    {
        return category.findAll(
            {
                include : pizzas, 
                
            })
        .then((data) => this.response(true, 'All pizzas', data))
        .catch((error : Error) => this.response(false, error.message))
    }
    else 
        return this.response(false, 'type of model is undefined')
  }

  public get_only_pizza() {
    const pizzas = this.getTable('PIZZAs')
    if (typeof pizzas != 'undefined')
    {
        return pizzas.findAll()
        .then((data) => this.response(true, 'All pizzas', data))
        .catch((error : Error) => this.response(false, error.message))
    }
    else 
        return this.response(false, 'type of model is undefined')
  }

  async getAccount(any : string | number, password : string)  {
    const client = this.getTable('CLIENTs')
    if(typeof client != 'undefined')
    { 
      return await client.findOne({
        where: {
          [Op.or]: [
            { EMAIL: any },
            { PHONE_NUMBER: any },
          ],
          PASS_WORD: password,
        }
      })
      .then((data) => data ? this.response(true, 'Logado com sucesso!', data) : this.response(false, 'Email ou senha errada'))
      .catch((error : Error) => this.response(false, error.name))

    }
    return this.response(false, 'Error: model is type of undefined  : (')
  }

  public get_info_pizza(pizzaID : string ) {
    const pizzas = this.getTable('PIZZAs')
    const category = this.getTable('CATEGORies')
    const igredients = this.getTable('IGREDIENTs')
    if(typeof pizzas != 'undefined' && typeof category != 'undefined' && typeof igredients != 'undefined' )
    {
      return pizzas.findByPk(pizzaID, 
        {
          include : [category ,igredients]
        }).then((data) => this.response(true, 'pizza', data))
        .catch((error :Error) => this.response(false, error.message))
    }
    else 
      return 'type of model is undefined'
  }

  public get_pizza_cart(clientID : string) {
    const cart = this.getTable('CARTs')
    const pizzas = this.getTable('PIZZAs')

    if(typeof pizzas != 'undefined' && typeof cart != 'undefined' )
    {
      return cart.findAll( 
        {
          where : {CLIENTID : clientID},
          include : [pizzas]
        }).then((data) => data)
        .catch((error :Error) => error.message)
    }
    else 
      return 'type of model is undefined'
  }
  public count_cart(clientID : string) {
    const cart = this.getTable('CARTs')

    if(typeof cart != 'undefined' )
    {
      return cart.count( 
        {
          where : {CLIENTID : clientID},
        }).then((num) => this.response(true, 'all products on cart', num) )
        .catch((error :Error) => this.response(false, error.message))
    }
    else 
      return 'type of model is undefined'
  }

  public get_cart(clientID : string) {
    const cart = this.getTable('CARTs')
    const pizzas = this.getTable('PIZZAs')

    if(typeof cart != 'undefined' && typeof pizzas != 'undefined')
    {
      return cart.findAll( 
        {
          where : {CLIENTID : clientID},
          include : [pizzas]
        }).then((data) => this.response(true, 'all products on cart', {products : data, counter : data.length}) )
        .catch((error :Error) => this.response(false, error.message))
    }
    else 
      return 'type of model is undefined'
  }

  public get_orders(clientID : string) {
    const orders = this.getTable('ORDERs')
    const items = this.getTable('ORDER_ITEMs')

    if(typeof orders != 'undefined' && typeof items != 'undefined')
    {
      return orders.findAll( 
        {
          where : {CLIENTID : clientID},
          include : [items]
        }).then((data) => this.response(true, 'all orders', data) )
        .catch((error :Error) => this.response(false, error.message))
    }
    else 
      return 'type of model is undefined'
  }
}