import prismaClient from "../../prisma"
import { hash } from "bcryptjs"

interface UserRequest {
    nome: string
    crm: string
    cpf:string
    sexo:string
    endereco_id:string
    foto_perfil:string
    idade:number
}

class UpdateMedService {

    async updateUser({nome,crm,cpf,idade,sexo,foto_perfil,endereco_id}: UserRequest){
        const updateUser = await prismaClient.medico.update({
            where: {
                crm
            },
            data: {
                nome,
                cpf,
                foto_perfil,
                idade,
                crm,
                endereco_id,
                sexo,
            },
          })

          return updateUser
    }
}

export { UpdateMedService }