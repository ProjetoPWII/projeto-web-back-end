import prismaClient from "../../prisma";

class DetailUserService{

    async execute(numero_sus:string){

      const user = await prismaClient.paciente.findFirst(
        {
            where:{
                numero_sus
            },
            include:{
              endereco:true,
              Consulta:true
            }
            // select:{
            //   numero_sus:true,
            //   nome:true,
            //   idade:true,
            //   endereco_id:true,
            //   foto_perfil:true,
            //   sexo:true,
            // },
        }
      )
     
      return user
    }
}

export {DetailUserService}