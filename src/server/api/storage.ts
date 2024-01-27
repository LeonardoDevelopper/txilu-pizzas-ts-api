import multer, { Multer } from 'multer'
import path from 'path'
import { webViewURL } from '../api/google_drive'
import {randomUUID} from 'crypto'
export default class Storage {

    private ext! : string;
    private ID! : string
    
    constructor(private folder : string, ) {
        this.folder = folder;
    }

    private upload(id : string) {
        this.ID = id
        const storage = multer.diskStorage({
            destination : (req, file, cb) => {
                cb(null, "uploads/"+this.folder)
            },
            filename : (req, file, cb) => {
                cb(null, id + path.extname(file.originalname))
                this.ext = path.extname(file.originalname)
            }
        })
        return multer({ storage : storage }) 

    }

    public setFile()
    {
        return this.upload(randomUUID())        
    }

    public getId() {
        return this.ID;
    }

    public createWebLinkView()  {
        return `http://192.168.130.241:8080/uploads/${this.folder}/${this.ID}${this.ext}`

    }

}