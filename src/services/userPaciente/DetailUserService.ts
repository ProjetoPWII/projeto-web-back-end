import prismaClient from "../../prisma";

class DetailUserService{

    async execute(numero_sus:string){

      const user = await prismaClient.paciente.findFirst(
        {
            where:{
                numero_sus
            },
            select:{
              numero_sus:true,
              nome:true,
              idade:true,
              endereco_id:true,
              sexo:true,
            }
        }
      )
     
      return user
    }
}

export {DetailUserService}