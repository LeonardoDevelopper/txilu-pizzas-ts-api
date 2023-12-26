import { Request, Response } from 'express'
import { Deliver } from '../../services/class/deliver';
import { Client } from '../../services/class/client';
import { Admin } from '../../services/class/admin';
import { Server } from '../server';

export function admin_routes() {
  const admin = new Admin;
  Server.routes().post('/admin/inserts/create-account', async(req : Request, res : Response ) => {
    const { name, email, phone, password } = req.body.data;
    const dbResponse = await admin.inserts.create_account(name, email, phone, password);
    res.json(dbResponse)
  })

  Server.routes().post('/admin/inserts/create-deliver-account', async (req : Request, res : Response ) => {
    const { id, infoCar } = req.body.data;
    console.log(req.body.data)
    const dbResponse = await admin.inserts.create_deliver_account(id, infoCar.board, infoCar.photo, infoCar.color, infoCar.name, infoCar.model )
    res.json(dbResponse)
  })

  Server.routes().post('/admin/inserts/create-pizza-category',  async (req : Request, res : Response ) => {
    const { name } = req.body.data;
    const dbResponse = await admin.inserts.create_pizza_category(name);
    res.json(dbResponse);
  })

  Server.routes().post('/admin/inserts/create-pizza',  async (req : Request, res : Response ) => {
    const { name, photo, price, status, category, igredients } = req.body.data ;
    const dbResponse = await admin.inserts.create_pizza(name, photo ,price, status, category, igredients)
    res.json(dbResponse);


  })
  
}