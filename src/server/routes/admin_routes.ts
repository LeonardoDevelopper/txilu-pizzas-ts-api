import { Request, Response, response } from 'express'
import { Deliver } from '../../services/class/deliver';
import { Client } from '../../services/class/client';
import { Admin } from '../../services/class/admin';
import { Server } from '../server';
import { randomUUID } from 'crypto'
import path from 'path'
import multer from 'multer'

import { webViewURL } from '../api/google_drive'
import Storage from '../api/storage';
import Email from '../api/nodemail';
import { middleWareUploadDeliver, middleWareUploadPizza } from '../middleware/uploadImg';
import { customRequest } from '../interfaces';

const uploadPizzas = new Storage('pizzas')
const uploadDelivers = new Storage('delivers')

export function admin_routes() {
  const admin = new Admin;

  Server.routes().post('/admin/inserts/create-account', async(req : Request, res : Response ) => {
    console.log(req.body)
    const { name, email, phone, password } = req.body.data;
    const dbResponse = await admin.inserts.create_account(name, email, phone, password);
    res.json(dbResponse)
  })

  Server.routes().post('/admin/request-reset-email',  async (req : Request, res : Response ) => {

    const {email} = req.body
    const emailReset = new Email()
    const emailResponse = emailReset.sendEmail(email, 'Redefinir senha', '<span>Recebemos o seu pedido de redefinição de senha acesse </span> <a href ="http://localhost:3000/adm/reset-password">Redefinir senha</a> <span>Para redefinir a sua senha</span>')
    res.json(await admin.selects.getEmail(email))

  })


  Server.routes().post('/admin/inserts/reset-password',  async (req : Request, res : Response ) => {
    const { email, password } = req.body ;
    console.log(req.body)
    const dbResponse = await admin.update.reset_password(email, password)
    console.log(dbResponse)
    res.json(dbResponse);
  })

  Server.routes().post('/admin/inserts/set-location', async (req : Request, res : Response) => {
    const { ID, coords } = req.body.data;
    console.log(req.body)  
    const dbResponse = await admin.inserts.set_admin_location(ID, coords.lat, coords.lon);
    console.log(dbResponse)
    res.json(dbResponse) 
  }) 

  Server.routes().post('/admin/inserts/create-deliver-account', middleWareUploadDeliver , async (req : customRequest, res : Response ) => {
    console.log(req.body);
    const  infoDeliver  = req.body;
     const dbResponse = admin.inserts.create_deliver_account(req.URL_PHOTO, infoDeliver.firstname, 
       infoDeliver.lastname, infoDeliver.email, infoDeliver.phone, 
        )
        console.log(await dbResponse)
     res.json(dbResponse)
  })

  Server.routes().post('/admin/inserts/create-pizza-category',  async (req : Request, res : Response ) => {
    const { name } = req.body;
    const dbResponse = await admin.inserts.create_pizza_category(name);
    res.json(dbResponse);
  })

  Server.routes().post('/admin/inserts/create-pizza', middleWareUploadPizza,  async (req : customRequest, res : Response ) => {
    console.log(req.body);
    const { name, price, desc, category, igredients } = req.body ;
    const dbResponse = await admin.inserts.create_pizza(name, req.URL_PHOTO ,price, 'Avaliable', category, desc, igredients.split(','))
    console.log(dbResponse)     
    res.json(dbResponse);

  })

  Server.routes().post('/admin/selects/get-account',  async (req : Request, res : Response ) => {
    const { any, password } = req.body.data ;
    console.log(req.body)
    const dbResponse = await admin.selects.getAccount(any, password)
    console.log(dbResponse)
    res.json(dbResponse);
  })

  Server.routes().get('/admin/selects/get-categories',  async (req : Request, res : Response ) => {
    console.log(req.body)
    const dbResponse = await admin.selects.getCategories()
    console.log(dbResponse)
     res.json(dbResponse);
  })

  Server.routes().get('/admin/selects/get-pizzas',  async (req : Request, res : Response ) => {
    const dbResponse = await admin.selects.getPizzas()
    console.log(dbResponse)
     res.json(dbResponse);
  })

  Server.routes().get('/admin/selects/get-info-pizza/:id',  async (req : Request, res : Response ) => {
    const dbResponse = await admin.selects.getPizzaInfo(req.params.id) //
    console.log(dbResponse)
     res.json(dbResponse);
  })

  Server.routes().delete('/admin/deletes/delete-pizza/:id', async (req : Request, res : Response ) => {
    const dbResponse = await admin.deletes.delete_pizza(req.params.id) //
    console.log(dbResponse)
     res.json(dbResponse);
  })

}