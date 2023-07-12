import prismaClient from "../../prisma";


interface PlantaoRequest {
  medico_crm: string
  data: Date
  num_atendimentos: number
}

class PlantaoService {

  async createPlantao({ medico_crm, data, num_atendimentos }: PlantaoRequest) {

    const plantao = await prismaClient.plantao.create({
      data: {
        medico_crm,
        data,
        num_atendimentos
      },
      select: {
        medico_crm: true,
        data: true,
        num_atendimentos: true
      }
    })

    return plantao

  }


  async getAll() {
    const plantao = await prismaClient.plantao.findMany({
      include:{
        Consulta:true,
        medico:true
      }
    })
    return plantao
  }

  async getByData(data: Date) {
    const plantao = await prismaClient.plantao.findUnique({
      where: {
              data
            },
            include:{
              Consulta:true,
            }
    })
    return plantao
  }


}
export { PlantaoService }