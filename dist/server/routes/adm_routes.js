"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const deliver_1 = require("../../services/class/deliver");
const client_1 = require("../../services/class/client");
const admin_1 = require("../../services/class/admin");
const route = express.Router();
function sync() {
    try {
        console.log('including user services...');
        const admin = new admin_1.Admin();
        const client = new client_1.Client();
        const deliver = new deliver_1.Deliver();
        require('./database/relationships');
        console.log('user services included with sucess : )');
    }
    catch (error) {
        console.log('\x1b[31m%s\x1b[0m', 'error in include user services : (');
    }
}
sync();
/*const admin = new Admin();
const client = new Client()
const deliver = new Deliver()
require('../../database/relationships')
*/
//admin.inserts.create_account('Loja Cazenga, Cuca', 'txilupizzascazengacuca@gmail.com', 956096907, '1001')
// deliver.update.update_account('Loja Cazenga, Cuca', 'txilupizzascazengacuca@gmail.com', "956096907", '1001', "9924893", "fsdfs")
route.get('/', (req, res) => {
    res.json({ Message: "Hello Word" });
});
module.exports = route;
