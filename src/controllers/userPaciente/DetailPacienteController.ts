import { Request, Response } from "express";
import { DetailUserService } from "../../services/userPaciente/DetailUserService";

class DetailPacienteController{

    async handle(req:Request, resp:Response){

        const user_sus = req.numero_sus

        const detailUserService = new DetailUserService()

        const detailUser = await detailUserService.execute(user_sus)
    
        return resp.json(detailUser)
        
    }
}

export {DetailPacienteController}