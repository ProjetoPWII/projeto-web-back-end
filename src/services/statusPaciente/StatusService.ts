import prismaClient from "../../prisma";

interface StatusRequest {
 observacoes:string,
 pressao_arterial:number,
 peso:number,
 id_consulta:string
}

class StatusService {
  
    async createStatus({ observacoes, pressao_arterial, peso,id_consulta }: StatusRequest) {

        const status = await prismaClient.statusPaciente.create({
            data: {
                observacoes,
                pressao_arterial,
                peso,
                id_consulta
            },
            select: {
              id_consulta:true,
              observacoes:true,
              pressao_arterial:true,
              peso:true
            }
        })

        return status

 }


  async updateStatus({observacoes, pressao_arterial, peso,id_consulta }: StatusRequest){


    const status = await prismaClient.statusPaciente.findFirst({
        where:{
            id_consulta:id_consulta
        },
    })

    console.log(status)

    const id = status ? status.id : 'not-found'

    console.log(id)


    const updateStatus = await prismaClient.statusPaciente.upsert({
        where: {
            id
        },
        update:{
            observacoes,
            pressao_arterial,
            peso,
        },
        create: {
            observacoes,
            pressao_arterial,
            peso,
            id_consulta
        }
        // data: {
        //     observacoes,
        //     pressao_arterial,
        //     peso
        // },
    })

      return updateStatus
  }

}
export {StatusService}