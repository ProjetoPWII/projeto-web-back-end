import { Request, Response } from "express";
import { DetailMedService } from "../../services/userMedico/DetailMedService";

class DetailMedicoController{

    async handle(req:Request, resp:Response){

        const user_crm = req.crm

        const detailUserService = new DetailMedService()

        const detailUser = await detailUserService.execute(user_crm)
    
        return resp.json(detailUser)
        
    }
}

export {DetailMedicoController}