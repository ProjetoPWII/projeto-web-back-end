import { Request, Response } from "express";
import { AuthUserService } from "../../services/userPaciente/AuthUserService";

class AuthPacienteController{

    async loginPaciente(req:Request, resp:Response){
      
        const {numero_sus, senha} = req.body
        console.log(senha)

        const authUserService = new AuthUserService()

        const authUser = await authUserService.execute({numero_sus,senha})
    
        return resp.json(authUser)
    }

}

export {AuthPacienteController}