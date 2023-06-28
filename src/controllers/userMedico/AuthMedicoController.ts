import { Request, Response } from "express";
import { AuthMedService } from "../../services/userMedico/AuthMedService";

class AuthMedicoController{

    async loginMedico(req:Request, resp:Response){
      
        const {crm, senha} = req.body
        //console.log(senha)

        const authUserService = new AuthMedService()

        const authUser = await authUserService.execute({crm,senha})
    
        return resp.json(authUser)
    }

}

export {AuthMedicoController}