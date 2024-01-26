import { Request, Response, response } from 'express'
import { Deliver } from '../../services/class/deliver';
import { Client } from '../../services/class/client';
import { Admin } from '../../services/class/admin';
import { Server } from '../server';
import { randomUUID } from 'crypto'
import path from 'path'
import multer from 'multer'

import { webViewURL } from '../api/google_drive'


const storage = multer.diskStorage({
  destination : function(req, file, cb){
    cb(null, 'uploads/')

  },
  filename : function(req, file, cb){
    cb(null, randomUUID() + path.extname(file.originalname))
    console.log(req)
  }
})
const upload = multer({storage : storage})

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
    const nodemailer = require('nodemailer');
    console.log(email)

    // Configuração do transporte SMTP 
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'leonardodevelopper924@gmail.com',
          pass: 'ryqc deln jegw ynko',
      },
    });

    // Opções do e-mail
    const mailOptions = {  
      from: 'leonardodevelopper924@gmail.com',
      to: email,
      subject: 'Redefinir senha',
      html: '<span>Olá, aqui é a equipa tecnica da <strong>txilu-pizzas</strong> recebemos o seu pedido de redefinição de senha acesse </span> <a href ="http://localhost:3000/adm/reset-password">Redefinir senha</a> <span>Para redefinir a sua senha</span>',
      
    };
 
    // Enviar e-mail
    transporter.sendMail(mailOptions, (error : any, info : any) => {
      if (error) {
          console.error('Erro ao enviar e-mail:', error);
          response.json({OK: false, message: error.message});
          
      } else {
          console.log('E-mail enviado:', info.response);
          response.json({OK: true, message: "Recebemos o seu email"})
      }
    });

  })
Server.routes().get('/',  async (req : Request, res : Response ) => {

  const result = await webViewURL('1vgiG-VCKRLT8hdRQGjviYRaV4Zq4UUAq')

    res.send(`<img src ="${result.webViewLink}" />`);
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

  Server.routes().post('/admin/inserts/create-deliver-account', async (req : Request, res : Response ) => {
    const { infoDeliver, infoCar } = req.body.data;
    const dbResponse = await admin.inserts.create_deliver_account(
      infoDeliver.id, infoDeliver.photo, infoDeliver.firstname, 
      infoDeliver.lastname, infoDeliver.email, infoDeliver.phone, 
       )
    res.json(dbResponse)
  })

  Server.routes().post('/admin/inserts/create-pizza-category',  async (req : Request, res : Response ) => {
    const { name } = req.body;
    const dbResponse = await admin.inserts.create_pizza_category(name);
    res.json(dbResponse);
  })

  Server.routes().post('/admin/inserts/create-pizza', upload.single('photo'),  async (req : Request, res : Response ) => {
    console.log(req.body);
    const { name, photo, price, status, category, igredients } = req.body.data ;
    const dbResponse = await admin.inserts.create_pizza(id, name, photo ,price, status, category, igredients)
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
    // console.log(req.body)
    const dbResponse = await admin.selects.getCategories()
    // console.log(dbResponse)
     res.json(dbResponse);
  })
  
}