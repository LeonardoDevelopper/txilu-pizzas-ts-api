import { NextFunction, Request, Response } from "express";
import {customRequest} from '../interfaces/index'
import Storage from "../api/storage";

export const middleWareUploadPizza = (req : customRequest, res: Response, next : NextFunction) => {
    const upload = new Storage('pizzas')
    upload.upload.single('photo')(req, res, (error) => {
        if(error)
        {
            return res.status(404).json({OK: false, errorMessage: error.message});
        }
        req.URL_PHOTO = upload.URLPhoto;
        next() 
    });


}
export const middleWareUploadDeliver = (req : customRequest, res: Response, next : NextFunction) => {
    const upload = new Storage('delivers')
    upload.upload.single('photo')(req, res, (error) => {
        if(error)
        {
            return res.status(404).json({OK: false, errorMessage: error.message});
        }
        req.URL_PHOTO = upload.URLPhoto;
        next() 
    });

 
}  