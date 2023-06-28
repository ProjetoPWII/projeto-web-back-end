import prismaClient from "../../prisma";


interface FichaRequest {
  numero_sus: string
}

class FichaService {

  async createFicha({ numero_sus }: FichaRequest) {

    const ficha = await prismaClient.fichaAcompanhamento.create({
      data: {
        numero_sus
      },
      select: {
        numero_sus: true,
        id:true
      }
    })

    return ficha

  }

  async getAll() {

    const fichas = await prismaClient.fichaAcompanhamento.findMany()

    return fichas

  }

  async getBySus(numero_sus:string) {

    const fichas = await prismaClient.fichaAcompanhamento.findFirst({
      where: {
        numero_sus
      },
      include:{
        consulta:true,
        
      }
    })

    return fichas

  }

}
export { FichaService }