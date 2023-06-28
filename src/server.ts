import 'express-async-errors';
import express,{ NextFunction, Request, response, Response } from "express";

import { router } from "./routes";

import cors from 'cors';

const app = express()



app.use(express.json())
app.use(cors())

app.use(router)

app.use((err:Error, req:Request, resp:Response, next:NextFunction)=>{
  
    if(err instanceof Error){
        return resp.status(400).json({err:err.message})
    }

    return resp.status(500).json({
        status:'error',
        message:'Internal server error'
    })
})



app.listen(3003, ()=>console.log('Servidor rodando'))