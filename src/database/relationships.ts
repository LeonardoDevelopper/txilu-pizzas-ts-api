import { Server } from '../server/server'

export default function relationships () : void {

  const [
  
    ADMIN,             ADMIN_LOCATION,
    CART,              CATEGORY,
    CLIENT,            DELIVER,
    DELIVER_LOCATION,  DELIVER_RATE,
    FAVORITE_DEVLIVER, ORDER_ITEMS,
    ORDER,             PIZZA,
    LOCAL_DELIVERY,    FAVORITE_PIZZA,
    PIZZA_RATE, CAR
  
   ] = Server.getDatabaseTables();
   
  CLIENT.hasMany(LOCAL_DELIVERY, {constraints: true})
  CLIENT.hasOne(CART, {constraints: true})
  CLIENT.hasMany(FAVORITE_DEVLIVER, {constraints: true})
  CLIENT.hasMany(FAVORITE_PIZZA, {constraints: true})
  
  CLIENT.hasMany(ORDER, {constraints: true})
  CLIENT.hasMany(DELIVER_RATE, {constraints: true})
  CLIENT.hasMany(PIZZA, {constraints: true})
  
  ORDER.belongsToMany(PIZZA_RATE, {through: ORDER_ITEMS, constraints: true})
  
  ADMIN.hasOne(ADMIN_LOCATION, {constraints: true})
  
  PIZZA.belongsToMany(ORDER, {through: ORDER_ITEMS, constraints: true } ) 
  PIZZA.hasMany(PIZZA_RATE, {constraints: true}) 
  PIZZA.hasMany(CART, {constraints: true}) 
  CATEGORY.hasMany(PIZZA, {constraints: true})
  
  DELIVER.hasOne(DELIVER_LOCATION, {constraints: true})
  DELIVER.hasMany(ORDER, {constraints: true})
  DELIVER.hasMany(DELIVER_RATE, {constraints: true})
  DELIVER.hasOne(CAR, {constraints: true})
  
}