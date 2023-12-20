import sequelize from "sequelize"
import admin from '../models/admin/admin'
import admin_location from '../models/admin/admin_location'


const adm_account = require("../adm-models/adm-account")
const client_account = require("../client-models/client-account")
const client_cart = require("../client-models/client-cart")
const client_favorites_deliver = require("../client-models/client-favorites-deliver")
const client_favorites_pizza = require("../client-models/client-favorites-pizza")
const client_local_delivery = require("../client-models/client-local-delivery")
const orders = require("../order-models/order")
const order_items = require("../order-models/items-order")
const pizza = require("../pizza-models/pizza")
const pizza_category = require("../pizza-models/pizza-category")
const pizza_rates = require("../pizza-models/pizza-rates")
const deliver_account = require("../deliver-models/deliver-account")
const deliver_location = require("../deliver-models/deliver-location")
const deliver_rate = require("../deliver-models/deliver-rate")
const adm_location = require("../adm-models/adm-location")

client_account.hasMany(client_local_delivery, {constraint: true})
client_account.hasOne(client_cart, {constraint: true})
client_account.hasMany(client_favorites_deliver, {constraint: true})
client_account.hasMany(orders, {constraint: true})
client_account.hasMany(pizza_rates, {constraint: true})
client_account.hasMany(deliver_rate, {constraint: true})

orders.belongsToMany(pizza, {through: order_items, constraint: true})

admin.hasOne(admin_location, {constraint: true})

pizza.belongsToMany(orders, {through: order_items, constraint: true } ) 
pizza.hasMany(pizza_rates, {constraint: true}) 
pizza.hasMany(client_cart, {constraint: true}) 
pizza_category.hasMany(pizza, {constraint: true})

deliver_account.hasOne(deliver_location, {constraint: true})
deliver_account.hasMany(orders, {constraint: true})
deliver_account.hasMany(deliver_rate, {constraint: true})