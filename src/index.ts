//server imports
import { Request, Response } from 'express'
import { Server } from './server/server';
import { Admin } from './services/class/admin';
import { Client } from './services/class/client';
import { Deliver } from './services/class/deliver';
import { admin_routes } from './server/routes/admin_routes'
import { deliver_routes } from './server/routes/deliver_routes';
import { client_routes } from './server/routes/client_routes';
import { uploadFile, webViewURL } from './server/api/google_drive';
import path from 'path'
import Email from './server/api/nodemail';

const  force = {force : true}
// start Server
Server.start(8080, 'localhost');

// create database connection
Server.connectDatabase('localhost', 'root', 'leoDev@924', 'txilu_pizzas_db', 'mysql')

// set configuration
Server.config()

// test database connection  
Server.testDatabaseConnection(); 

// build and sync models 
Server.buildDatabase();
Server.createDatabaseTables()   
Server.databaseRelationShips()

//routes
 
admin_routes()
deliver_routes()
client_routes()

//uploadFile()
//webViewURL('1vgiG-VCKRLT8hdRQGjviYRaV4Zq4UUAq')

// const emailReset = new Email()
// const emailResponse = emailReset.sendEmail('inikojericho008@gmail.com', 'Redefinir senha', '<span>Recebemos o seu pedido de redefinição de senha acesse </span> <a href ="http://localhost:3000/adm/reset-password">Redefinir senha</a> <span>Para redefinir a sua senha</span>')

// console.log(emailResponse) 