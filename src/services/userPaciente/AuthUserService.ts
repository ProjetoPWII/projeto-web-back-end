import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { Secret, sign } from "jsonwebtoken";
require('dotenv').config()

interface AuthRequest{
  numero_sus:string
  senha:string
}

class AuthUserService{

    async execute({numero_sus, senha}:AuthRequest){

      const user = await prismaClient.paciente.findFirst({
        where:{
            numero_sus:numero_sus
        }
      })

      if(!user){
        throw new Error('Usuário não encontrado')
      }

      const passwordMatch = await compare(senha, user.senha)

      if(!passwordMatch){
        throw new Error('Número SUS incorreto')
      }

      const token = sign({
        nome:user.nome,
        numero_sus:user.numero_sus
      },
      process.env.JWT_SECRET as Secret,
      {
        subject:user.numero_sus,
        expiresIn:'30d'
      })
 
      return {
        numero_sus:user.numero_sus,
        nome:user.nome,
        endereco_id:user.endereco_id,
        foto_perfil:user.foto_perfil,
        sexo:user.sexo,
        token:token
      }
    }
}

export {AuthUserService}