import prismaClient from "../../prisma"
import { hash } from "bcryptjs"

interface UserRequest {
    nome: string
    cpf: string
    numero_sus: string
    sexo:string
    endereco_id:string
    foto_perfil:string
    idade:number
}

class UpdateUserService {

    async updateUser({nome,cpf,numero_sus,idade,sexo,foto_perfil,endereco_id}: UserRequest){
        const updateUser = await prismaClient.paciente.update({
            where: {
                numero_sus
            },
            data: {
                nome,
                cpf,
                foto_perfil,
                idade,
                numero_sus,
                endereco_id,
                sexo,
            },
          })

          return updateUser
    }
}

export { UpdateUserService }