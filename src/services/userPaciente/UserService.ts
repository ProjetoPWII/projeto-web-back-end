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
    senha:string
}

class UserService {

    async createUser({ nome,cpf, numero_sus,idade, sexo, foto_perfil, endereco_id,senha}: UserRequest) {

        const passwordHash = await hash(senha, 8)

        const user = await prismaClient.paciente.create({
            data: {
                nome,
                cpf,
                foto_perfil,
                idade,
                numero_sus,
                endereco_id,
                sexo,
                senha:passwordHash
            },
            select: {
                numero_sus: true,
                nome: true,
                foto_perfil: true,
                endereco_id:true,
                sexo:true,
                idade:true,
                senha:true
            }
        })

        return user
    }

}

export { UserService }