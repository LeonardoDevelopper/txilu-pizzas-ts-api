import { Request, Response } from 'express'
import { Deliver } from '../../services/class/deliver';
import { Client } from '../../services/class/client';
import { Admin } from '../../services/class/admin';
import { Server } from '../server';
import { Payment, PaymentType } from '../api/paypal';
import paypal from 'paypal-rest-sdk'

export function client_routes() {

      const payment = new Payment()
    const client = new Client()

    Server.routes().post('/client/inserts/create-account', async(req : Request, res : Response ) => {
        const { email, phone, password } = req.body;
        const dbResponse = await client.insert.create_account(email, phone, password)
        res.json(dbResponse)
    } )

    Server.routes().get('/client/selects/get-pizzas', async(req : Request, res : Response ) => {
        const dbResponse = await client.selects.get_pizzas()
        console.log(dbResponse)
        res.json(dbResponse)
    } )

    Server.routes().post('/client/selects/get-account',  async (req : Request, res : Response ) => {
        const { any, password } = req.body ;
        console.log(req.body)
        const dbResponse = await client.selects.getAccount(any, password)
        console.log(dbResponse)
        res.json(dbResponse);
      })

    Server.routes().get('/client/selects/count-cart/:clientId', async(req : Request, res : Response ) => {
        const { clientId } = req.params
        const dbResponse = await client.selects.count_cart(clientId)
        res.json(dbResponse)
    } )

    Server.routes().get('/client/selects/get-cart/:clientId', async(req : Request, res : Response ) => {
        const { clientId } = req.params
        console.log(req.params)
        const dbResponse = await client.selects.get_cart(clientId)
        console.log(dbResponse)
        res.json(dbResponse)
    } )

    Server.routes().get('/client/selects/get-info-pizza/:id', async(req : Request, res : Response ) => {
        const { id } = req.params
        console.log(req)
        const dbResponse = await client.selects.get_info_pizza(id)
        res.json(dbResponse)
    } )

    Server.routes().get('/client/inserts/add-to-cart/:clientId/:pizzaId', async(req : Request, res : Response ) => {
        const { clientId, pizzaId  } = req.params;
        console.log(req.params)
        const dbResponse = await client.insert.add_to_cart(clientId, pizzaId)
        console.log(dbResponse)
        res.json(dbResponse)
    } )

    Server.routes().delete('/client/deletes/product-from-cart/:id/:clientId', async(req : Request, res : Response ) => {
        const { id, clientId } = req.params;
        console.log(req.params)
        const dbResponse = await client.deletes.delete_from_cart(id, clientId)
        console.log(dbResponse)
        res.json(dbResponse)
    } )
    Server.routes().post('/client/inserts/payment', async(req : Request, res : Response ) => {

        const { items, total, ORDERID } = req.body;
        console.log(req.body) 
        //inserir as pizzas aos itens do pedido.

        console.log(await client.insert.add_order_items(items, ORDERID))
        const response = await payment.pay(items, total, ORDERID)
        .then((result) => result)
        .catch((error) => console.log(error))
        res.json(response)
    } )
    Server.routes().get('/success/:id', async (req : Request, res : Response) => {
        const { id } = req.params;
        //Salvar pagamento na DB
        console.log(req.params)
        const dbResponse = await client.update.update_order_status(id)
        if(dbResponse.OK)
            res.render('success.ejs');
        else
            res.send("<h2>Ocorreu algum erro durante o pagamento...</h2>")
    })
    Server.routes().get('/cancel', (req : Request, res : Response) => {
        res.render('cancel.ejs');
    })
    Server.routes().post('/client/inserts/send-order', async(req : Request, res : Response ) => {

        const { coords, distance, time, status, CLIENTID } = req.body;  
        console.log(req.body)
        const response = await client.insert.send_order(coords.LAT, coords.LON, Number(distance), time, status, CLIENTID)
        console.log(response) 
        res.json(response)  
    } )
    Server.routes().get('/client/selects/get-only-pizzas', async(req : Request, res : Response ) => {
        const response = await client.selects.get_only_pizza()
        console.log(response)
        res.json(response) 
    } )

    Server.routes().get('/client/selects/get-orders/:clientID', async(req : Request, res : Response ) => {
        const { clientID } = req.params;
        console.log(req.params)
        const response = await client.selects.get_orders(clientID)
        console.log(response)
        res.json(response) 
    } )
} 