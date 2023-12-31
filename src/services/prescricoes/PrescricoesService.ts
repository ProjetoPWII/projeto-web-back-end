import prismaClient from "../../prisma";


interface PrescricoesRequest {
  id_consulta: string
  orientacoes: string
  atestado_medico: boolean
}

class PrescricoesService {

  async createPrescricao({ id_consulta, orientacoes, atestado_medico }: PrescricoesRequest) {

    const prescricao = await prismaClient.prescricoes.create({
      data: {
        id_consulta,
        orientacoes,
        atestado_medico
      },
      select: {
        id_consulta: true,
        orientacoes: true,
        atestado_medico: true,
        id:true
      }
    })

    return prescricao

  }


  async getAll() {
    const prescricoes = await prismaClient.prescricoes.findMany()
    return prescricoes
  }

  async getById(id_consulta: string) {
    const prescricao = await prismaClient.prescricoes.findFirst({
      where: {
        id_consulta
      },
      include:{
        PrescricaoMedicacao:true
      }
    })
    return prescricao
  }

  async updatePrescricao({ id_consulta, orientacoes, atestado_medico }: PrescricoesRequest){

    const pres = await prismaClient.prescricoes.findFirst({
      where:{
        id_consulta
      }
    })


    const id = pres? pres.id : 'not-found'


    const updateStatus = await prismaClient.prescricoes.upsert({
        where: {
            id
        },
        update:{
          orientacoes,
          atestado_medico
        },
        create:{
          id_consulta,
          orientacoes,
          atestado_medico
        }
        // data: {
        //   orientacoes,
        //   atestado_medico
        // },
      })

      return updateStatus
  }

}
export { PrescricoesService }