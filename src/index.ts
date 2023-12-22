//server imports
import { Request, Response } from 'express'
import { Server } from './server/server';
import { Admin } from './services/class/admin';
import { Client } from './services/class/client';
import { Deliver } from './services/class/deliver';
import { admin_routes } from './server/routes/admin_routes'
// start Server
Server.start(8080, 'localhost');

// create database connection
Server.connectDatabase('localhost', 'root', '1001', 'db_api_TS', 'mysql')

// set configuration
Server.config()

// test database connection 
Server.testDatabaseConnection(); 

// build and sync models 
Server.buildDatabase({force: true});
Server.createDatabaseTables()

//routes

admin_routes()