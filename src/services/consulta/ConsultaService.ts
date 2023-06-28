import prismaClient from "../../prisma";

interface ConsultaRequest {
    numero_sus: string
    medico_crm: string
    status: string
    data_plantao: Date
    id_ficha: string
}

class ConsultaService {

    async createConsulta({ numero_sus, medico_crm, status, data_plantao, id_ficha }: ConsultaRequest) {

        const consulta = await prismaClient.consulta.create({
            data: {
                numero_sus,
                medico_crm,
                status,
                data_plantao,
                id_ficha
            },
            select: {
                id: true,
                numero_sus: true,
                status: true,
                id_ficha: true,
                data_plantao: true,
                medico_crm: true
            }
        })

        return consulta
    }



    async getAll() {
        const consultas = await prismaClient.consulta.findMany()
        return consultas
    }


    async getAllBySus(numero_sus: string) {
        const consultas = await prismaClient.consulta.findMany({
            where: {
                numero_sus
            },
            include:{
                StatusPaciente:true
            }
        })

        return consultas
    }

    async getAllByCrm(medico_crm: string) {

        const consultas = await prismaClient.consulta.findMany({
            where: {
                medico_crm
            },
            include:{
                StatusPaciente:true
            }
        })

        return consultas
    }


    async consultaDetail(id_consulta: string) {


        const consulta = await prismaClient.consulta.findFirst({
            where: {
                id: id_consulta
            },
            include: {
                Prescricoes: true,
                StatusPaciente: true
            },
        })

        return consulta
    }

    async getBySus(numero_sus: string) {


        const consulta = await prismaClient.consulta.findFirst({
            where: {
                numero_sus
            }
        })

        return consulta
    }
}
export { ConsultaService }