import { Request, Response } from 'express'
import { Deliver } from '../../services/class/deliver';
import { Client } from '../../services/class/client';
import { Admin } from '../../services/class/admin';
import { Server } from '../server';

export function admin_routes() {
  const admin = new Admin;
  Server.routes().get('/', (req : Request, res : Response ) => {
    res.json({success: "Hello Word"})
  })

  Server.routes().get('/any', (req : Request, res : Response ) => {
    res.json({success: "HAhHahHahHahHahHahH"})
  })
  
}