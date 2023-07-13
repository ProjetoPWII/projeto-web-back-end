import { Request, Response } from "express";
import { MedService } from "../../services/userMedico/MedService";
import { UpdateMedService } from "../../services/userMedico/UpdateMedService";
import { handleUpload } from "../../config/multer";

class MedicoController {

    async handleMedico(req: Request, resp: Response) {

        const { nome,idade,sexo,endereco_id, crm,cpf,senha} = req.body

        if(!req.file){
            throw new Error('error upload image')
        }else{
            const { filename } = req.file
            const createUserService = new MedService()
            const res = await handleUpload(req.session.path)
            const user = await createUserService.createUser({nome,idade:parseInt(idade),sexo,endereco_id,crm,cpf,foto_perfil: res['secure_url'],senha})
    
            return resp.json(user)
        }

     
    }

    async updateMedico(req: Request, resp: Response) {

        const { nome, idade, sexo, endereco_id, crm, cpf, foto_perfil } = req.body
     
        const createUserService = new UpdateMedService()


        if (!req.file) {
        
            const user = await createUserService.updateUser({ 
                nome, 
                idade:parseInt(idade), 
                sexo, endereco_id, 
                crm,
                 cpf, 
                foto_perfil })
            return resp.json(user)

        } else {
          
            const { filename } = req.file
            const user = await createUserService.updateUser({
                nome,
                idade:parseInt(idade),
                sexo,
                endereco_id,
                crm,
                cpf,
                foto_perfil: filename
            })
            return resp.json(user)

        }
    }
}

export { MedicoController }