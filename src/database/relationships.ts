import sequelize from 'sequelize'
import admin from '../models/admin/account'
import admin_location from '../models/admin/location'
import client from '../models/client/account'
import client_cart from '../models/client/cart'
import client_favorite_deliver from '../models/client/favorite_deliver'
import client_favorite_pizza from '../models/client/favorite_pizza'
import client_local_delivery from '../models/client/local_delivery'
import deliver from '../models/deliver/account'
import deliver_rate from '../models/deliver/rate'
import deliver_location from '../models/deliver/location'
import order_items from '../models/order/items'
import order from '../models/order/order'
import category from '../models/pizza/category'
import pizza from '../models/pizza/pizza'
import pizza_rate from '../models/pizza/rate'

client.hasMany(client_local_delivery, {constraint: true})
client.hasOne(client_cart, {constraint: true})
client.hasMany(client_favorite_deliver, {constraint: true})
client.hasMany(client_favorite_pizza, {constraint: true})

client.hasMany(order, {constraint: true})
client.hasMany(pizza_rate, {constraint: true})
client.hasMany(deliver_rate, {constraint: true})

order.belongsToMany(pizza, {through: order_items, constraint: true})

admin.hasOne(admin_location, {constraint: true})

pizza.belongsToMany(order, {through: order_items, constraint: true } ) 
pizza.hasMany(pizza_rate, {constraint: true}) 
pizza.hasMany(client_cart, {constraint: true}) 
category.hasMany(pizza, {constraint: true})

deliver.hasOne(deliver_location, {constraint: true})
deliver.hasMany(order, {constraint: true})
deliver.hasMany(deliver_rate, {constraint: true})