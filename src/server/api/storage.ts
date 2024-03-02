import multer, { Multer } from 'multer'
import path from 'path'
import { webViewURL } from '../api/google_drive'
import {randomUUID} from 'crypto'
export default class Storage {

    private ext! : string;
    public URLPhoto! : string
    private ID! : string
    public upload! : Multer
    constructor(private folder : string ) {
        this.folder = folder;
        this.ID = randomUUID();
        const storage = multer.diskStorage({
            destination : (req, file, cb) => {
                cb(null, "uploads/"+this.folder)
            },
            filename : (req, file, cb) => {
                cb(null, this.ID + path.extname(file.originalname))
                this.ext = path.extname(file.originalname)
                this.URLPhoto = `http://192.168.7.241:8080/uploads/${this.folder}/${this.ID}${this.ext}`
            }
        })
        this.upload =  multer({ storage : storage })
    }

}