import { Request, Response } from "express";
import { UserService } from "../../services/userPaciente/UserService";
import { UpdateUserService } from "../../services/userPaciente/UpdateUserService";
import { handleUpload } from "../../config/multer";



class PacienteController {


  
    async handlePaciente(req: Request, resp: Response) {

        if (!req.file) {
            throw new Error('error upload file')
        } else {
            console.log(req.body)

            const { filename } = req.file

            const res = await handleUpload(req.session.path)
    
            const { nome, idade, sexo, endereco_id, numero_sus, cpf, senha } = req.body

            const createUserService = new UserService()
            const user = await createUserService.createUser({
                nome, idade:
                    parseInt(idade), sexo, endereco_id, numero_sus, cpf, foto_perfil: res['secure_url'], senha
            })
            return resp.json(user)

        }

    }

    async updatePaciente(req: Request, resp: Response) {

        const { nome, idade, sexo, endereco_id, numero_sus, cpf, foto_perfil } = req.body
     
        const createUserService = new UpdateUserService()


        if (!req.file) {
        
            const user = await createUserService.updateUser({ nome, idade:parseInt(idade), sexo, endereco_id, numero_sus, cpf, foto_perfil })
            return resp.json(user)

        } else {
          
            const { filename } = req.file
            const user = await createUserService.updateUser({
                nome,
                idade:parseInt(idade),
                sexo,
                endereco_id,
                numero_sus,
                cpf,
                foto_perfil: filename
            })
            return resp.json(user)

        }
    }

}

export { PacienteController }