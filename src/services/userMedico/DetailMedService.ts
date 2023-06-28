import prismaClient from "../../prisma";

class DetailMedService{

    async execute(crm:string){

      const user = await prismaClient.medico.findFirst(
        {
            where:{
                crm
            },
            select:{
                crm:true,
                nome:true,
                endereco_id:true,
                sexo:true,
                idade:true,
                foto_perfil:true
            }
        }
      )
     
      return user
    }
}

export {DetailMedService}