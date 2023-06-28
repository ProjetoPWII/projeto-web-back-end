import { Request, Response } from "express";
import { MedService } from "../../services/userMedico/MedService";

class MedicoController {

    async handleMedico(req: Request, resp: Response) {

        const { nome,idade,sexo,endereco_id, crm,cpf,foto_perfil,senha} = req.body

        //console.log(name, email, password)

        const createUserService = new MedService()
        const user = await createUserService.createUser({nome,idade,sexo,endereco_id,crm,cpf,foto_perfil,senha})

        return resp.json(user)
    }
}

export { MedicoController }