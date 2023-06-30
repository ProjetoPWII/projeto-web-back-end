import crypto from 'crypto';
import multer from "multer";

import {extname, resolve} from 'path'

// pasta das imagens
export default{
    upload(folder:string){
        return{
            storage:multer.diskStorage({
                destination:resolve(__dirname,'..','..',folder),
                filename(req,file,cb){
                    const fileHash = crypto.randomBytes(16).toString("hex")
                    const fileName = `${fileHash}-${file.originalname}`
                    cb(null, fileName)
                }
            })
        }
    }
}