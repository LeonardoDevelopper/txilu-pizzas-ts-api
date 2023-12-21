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

client.hasMany(client_local_delivery, {constraints: true})
client.hasOne(client_cart, {constraints: true})
client.hasMany(client_favorite_deliver, {constraints: true})
client.hasMany(client_favorite_pizza, {constraints: true})

client.hasMany(order, {constraints: true})
client.hasMany(pizza_rate, {constraints: true})
client.hasMany(deliver_rate, {constraints: true})

order.belongsToMany(pizza, {through: order_items, constraints: true})

admin.hasOne(admin_location, {constraints: true})

pizza.belongsToMany(order, {through: order_items, constraints: true } ) 
pizza.hasMany(pizza_rate, {constraints: true}) 
pizza.hasMany(client_cart, {constraints: true}) 
category.hasMany(pizza, {constraints: true})

deliver.hasOne(deliver_location, {constraints: true})
deliver.hasMany(order, {constraints: true})
deliver.hasMany(deliver_rate, {constraints: true})


