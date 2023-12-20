//server imports
import { Server } from './server/server';
import { Admin } from './services/class/admin';
import { Client } from './services/class/client';
import { Deliver } from './services/class/deliver';

// creating server instance
const server = new Server(8080, 'localhost');
// set configuration
server.config();
// set routes
server.routers();

// create database connection
export const databaseModel = server.connectDatabase('localhost', 'root', 'leoDev@924', 'db_api_TS', 'mariadb');

(async () => {
  // test database connection
  console.log(await server.testDatabaseConnection());
  // build and sync models 
  console.log(await server.buildDatabase());

})()

 const admin = new Admin();
 const client = new Client()
 const deliver = new Deliver()
 require('./database/relationships')
  admin.inserts.create_deliver("AO000-32-847-00038");
//admin.inserts.create_account('Loja Cazenga, Cuca', 'txilupizzascazengacuca@gmail.com', 956096907, '1001')

// deliver.update.update_account('Loja Cazenga, Cuca', 'txilupizzascazengacuca@gmail.com', "956096907", '1001', "9924893", "fsdfs")

// start server
console.log(server.start());

