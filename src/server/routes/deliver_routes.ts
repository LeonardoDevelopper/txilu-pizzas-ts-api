import { Request, Response } from 'express'
import { Deliver } from '../../services/class/deliver';
import { Client } from '../../services/class/client';
import { Admin } from '../../services/class/admin';
import { Server } from '../server';

export function deliver_routes() {
    const deliver = new Deliver()

    Server.routes().post('/deliver/selects/get-account', async(req : Request, res : Response ) => {
        const { id, username, password } = req.body
        const dbResponse = await deliver.update.account(id, username, password)
        console.log(dbResponse)
        res.json(dbResponse)
    } )

    Server.routes().post('/deliver/selects/request-account', async(req : Request, res : Response ) => {
        const { email} = req.body
        console.log(req)
        const dbResponse = await deliver.selects.request_account(email)
        console.log(dbResponse)
        res.json(dbResponse)
    } )

    Server.routes().post('/deliver/updates/update-account', async(req : Request, res : Response ) => {
        console.log(req)
         const { id, username, password } = req.body
         const dbResponse = await deliver.update.account(id, username, password)
         console.log(dbResponse)
         res.json(dbResponse)
    } )

    Server.routes().put('/deliver/updates/update-location/:id/:latitude/:longitude', async(req : Request, res : Response ) => {
         const { id, latitude, longitude } = req.params
        console.log(req.params)
         const dbResponse = await deliver.update.location(id, Number(latitude), Number(longitude));
         console.log(dbResponse)
         res.json(dbResponse) 
    } )
    Server.routes().get('/deliver/inserts/set-location/:id/:latitude/:longitude', async(req : Request, res : Response ) => {
        const { id, latitude, longitude } = req.params
       console.log(req.params)
        const dbResponse = await deliver.inserts.set_deliver_location(id, latitude, longitude)
         console.log(dbResponse)
         res.json(dbResponse)
   } )


   Server.routes().get('/deliver/selects/get-stores-positions', async(req : Request, res : Response ) => {
    console.log(req)
    const dbResponse = await deliver.selects.get_stores()
     console.log(dbResponse.data)
     res.json(dbResponse)
} )


}