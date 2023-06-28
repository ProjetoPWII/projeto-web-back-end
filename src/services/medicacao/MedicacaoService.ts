import prismaClient from "../../prisma";


interface MedicacaoRequest {
    nome: string
}

class MedicacaoService {

    async createMedicacao({ nome }: MedicacaoRequest) {

        const medicacao = await prismaClient.medicacao.create({
            data: {
                nome
            },
            select: {
             nome:true,
             id:true
            }
        })

        return medicacao

    }


    async getAll(){
        const medicacoes = await prismaClient.medicacao.findMany()
        return medicacoes
    }

    async getById(id:string){
        const medicacao = await prismaClient.medicacao.findUnique({
            where:{
                id
            }
        })
        return medicacao
    }
}
export { MedicacaoService }