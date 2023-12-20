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
export const databaseModel =  server.connectDatabase('localhost', 'root', '1001', 'db_api_TS');
// test database connection
server.testDatabaseConnection();
// build and sync models 
server.buildDatabase();

// start server
console.log(server.start());

const admin = new Admin();
const client = new Client()
const deliver = new Deliver()

admin.inserts.create_account()