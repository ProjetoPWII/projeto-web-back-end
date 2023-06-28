import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { Secret, sign } from "jsonwebtoken";
require('dotenv').config()

interface AuthMedRequest{
  crm:string
  senha:string
}

class AuthMedService{

    async execute({crm,senha}:AuthMedRequest){

      const user = await prismaClient.medico.findFirst({
        where:{
            crm
        }
      })

      if(!user){
        throw new Error('Usuário não encontrado')
      }

      const passwordMatch = await compare(senha, user.senha)

      if(!passwordMatch){
        throw new Error('Senha incorreta')
      }

      const token = sign({
        nome:user.nome,
        numero_sus:user.crm
      },
      process.env.JWT_SECRET as Secret,
      {
        subject:user.crm,
        expiresIn:'30d'
      })
 
      return {
        numero_sus:user.crm,
        nome:user.nome,
        endereco:user.endereco_id,
        foto:user.foto_perfil,
        token:token
      }
    }
}

export {AuthMedService}