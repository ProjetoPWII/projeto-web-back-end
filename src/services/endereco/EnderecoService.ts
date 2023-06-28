import prismaClient from "../../prisma";

interface EnderecoRequest {
    cidade: string
    rua: string
    bairro: string
    estado: string
}

class EnderecoService {

    async createEndereco({ cidade, estado, bairro, rua }: EnderecoRequest) {

        const endereco = await prismaClient.endereco.create({
            data: {
                cidade,
                estado,
                bairro,
                rua
            },
            select: {
                id:true,
                cidade: true,
                rua: true,
                bairro: true,
                estado: true
            }
        })

        return endereco
    }

    async get(id:string){

        const enderecos = await prismaClient.endereco.findMany({
            where:{
                id
             }
        })

        return enderecos

    }
}
export { EnderecoService }