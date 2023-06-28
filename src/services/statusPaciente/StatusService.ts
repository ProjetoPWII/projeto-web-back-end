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
}
export {StatusService}