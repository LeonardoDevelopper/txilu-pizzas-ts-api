import multer, { Multer } from 'multer'
import path from 'path'
import { webViewURL } from '../api/google_drive'

export default class Storage {

    public setFile!: Multer;
    private ext! : string;
    
    constructor(private folder : string, private ID : string) {
        this.folder = folder;
        this.upload()
    }

    private upload() {

        const storage = multer.diskStorage({
            destination : (req, file, cb) => {
                cb(null, "uploads/"+this.folder)
            },
            filename : (req, file, cb) => {
                cb(null, this.ID + path.extname(file.originalname))
                this.ext = path.extname(file.originalname)
                console.log(req)
            }
        })
        this.setFile =  multer({ storage : storage }) 

    }
    public getId() {
        return this.ID;
    }

    public createPath() {
        return `http://192.168.130.241:8080/uploads/${this.folder}/${this.ID}${this.ext}`

    }

}