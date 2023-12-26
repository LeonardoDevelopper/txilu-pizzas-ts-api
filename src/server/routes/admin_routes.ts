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

  Server.routes().post('/admin/inserts/create-deliver-account', (req : Request, res : Response ) => {
    const { id, infoCar, adress } = req.body.data;
    res.json({success: "HAhHahHahHahHahHahH"})
  })
  
}