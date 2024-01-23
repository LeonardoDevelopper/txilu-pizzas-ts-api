import { Request, Response, response } from 'express'
import { Deliver } from '../../services/class/deliver';
import { Client } from '../../services/class/client';
import { Admin } from '../../services/class/admin';
import { Server } from '../server';

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
      to: 'crislopesananias@gmail.com',
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

  Server.routes().post('/admin/inserts/reset-password',  async (req : Request, res : Response ) => {
    const { email, password } = req.body ;
    console.log(req.body)
    const dbResponse = await admin.update.reset_password(email, password)
    console.log(dbResponse)
    res.json(dbResponse);
  })

  Server.routes().post('/admin/inserts/set-location', async (req : Request, res : Response) => {
    const { lat, lon, adminID } = req.body.data;
    const dbResponse = await admin.inserts.set_admin_location(lat, lon, adminID);
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
    const { name } = req.body.data;
    const dbResponse = await admin.inserts.create_pizza_category(name);
    res.json(dbResponse);
  })

  Server.routes().post('/admin/inserts/create-pizza',  async (req : Request, res : Response ) => {
    const { name, photo, price, status, category, igredients } = req.body.data ;
    const dbResponse = await admin.inserts.create_pizza(name, photo ,price, status, category, igredients)
    res.json(dbResponse);


  })

  Server.routes().post('/admin/selects/get-account',  async (req : Request, res : Response ) => {
    const { any, password } = req.body.data ;
    console.log(req.body)
    const dbResponse = await admin.selects.getAccount(any, password)
    console.log(dbResponse)
    res.json(dbResponse);
  })
  
}