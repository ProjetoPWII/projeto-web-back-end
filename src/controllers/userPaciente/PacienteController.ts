import { Request, Response } from "express";
import { UserService } from "../../services/userPaciente/UserService";
import { UpdateUserService } from "../../services/userPaciente/UpdateUserService";

class PacienteController {

    async handlePaciente(req: Request, resp: Response) {

        const { nome,idade,sexo,endereco_id, numero_sus,cpf,foto_perfil,senha} = req.body

        //console.log(name, email, password)

        const createUserService = new UserService()
        const user = await createUserService.createUser({nome,idade,sexo,endereco_id,numero_sus,cpf,foto_perfil,senha})

        return resp.json(user)
    }

    async updatePaciente(req: Request, resp: Response) {

        const { nome,idade,sexo,endereco_id, numero_sus,cpf,foto_perfil} = req.body

        //console.log(name, email, password)

        const createUserService = new UpdateUserService()
        const user = await createUserService.updateUser({nome,idade,sexo,endereco_id,numero_sus,cpf,foto_perfil})

        return resp.json(user)
    }

}

export { PacienteController }