import prismaClient from "../../prisma";


interface PrescricoesMedRequest {
    id_medicacao:string
    id_prescricao:string
    qtde_caixas:number
}

class PrescricoesMedService {
  
    async createPrescricaoMed({ id_medicacao, id_prescricao, qtde_caixas }: PrescricoesMedRequest) {

        const prescricaoMed = await prismaClient.prescricaoMedicacao.create({
            data: {
             id_medicacao,
             id_prescricao,
             qtde_caixas
            },
            select: {
              id_medicacao:true,
              id_prescricao:true,
              qtde_caixas:true,
              id:true
            }
        })

        return prescricaoMed

 }

 async getAll(){
    const prescricoesMed = await prismaClient.prescricaoMedicacao.findMany()
    return prescricoesMed
 }

 async getById(id:string){
    const prescricaoMed = await prismaClient.prescricaoMedicacao.findUnique({
        where:{
            id
        },
        include:{
            prescricao:true,
            medicacao:true
        }
    })
    return prescricaoMed
 }
}
export {PrescricoesMedService}