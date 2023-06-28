import prismaClient from "../../prisma"
import { hash } from "bcryptjs"

interface MedRequest {
    nome: string
    cpf: string
    crm: string
    endereco_id:string
    foto_perfil:string
    idade:number
    sexo:string
    senha:string
}

class MedService {

    async createUser({ nome,cpf, crm,idade, foto_perfil, endereco_id, sexo, senha}: MedRequest) {

        const passwordHash = await hash(senha, 8)

        const user = await prismaClient.medico.create({
            data: {
                nome,
                cpf,
                foto_perfil,
                idade,
                crm,
                endereco_id,
                sexo,
                senha:passwordHash
            },
            select: {
                crm: true,
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

export { MedService }