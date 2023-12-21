const express = require('express');
import { Request, Response } from 'express'
import { Server } from '../server';
import { Deliver } from '../../services/class/deliver';
import { Client } from '../../services/class/client';
import { Admin } from '../../services/class/admin';

const route = express.Router();

function sync() : void {
  try {
    console.log('including user services...')
    const admin = new Admin();
    const client = new Client()
    const deliver = new Deliver()
    require('./database/relationships')
    console.log('user services included with sucess : )')

  } catch (error) {
    console.log('\x1b[31m%s\x1b[0m', 'error in include user services : (')
  }

}

sync()

/*const admin = new Admin();
const client = new Client()
const deliver = new Deliver()
require('../../database/relationships')
*/

//admin.inserts.create_account('Loja Cazenga, Cuca', 'txilupizzascazengacuca@gmail.com', 956096907, '1001')

// deliver.update.update_account('Loja Cazenga, Cuca', 'txilupizzascazengacuca@gmail.com', "956096907", '1001', "9924893", "fsdfs")


route.get('/', (req: Request, res: Response) => {
  res.json({ Message: "Hello Word" });
});

module.exports = route;
