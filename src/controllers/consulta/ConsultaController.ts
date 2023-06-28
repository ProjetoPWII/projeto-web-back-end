import { Request, Response } from "express";
import { ConsultaService } from "../../services/consulta/ConsultaService";


class ConsultaController {

    async handleConsulta(req: Request, res: Response) {
     
        const {status, id_ficha, numero_sus, medico_crm, data_plantao} = req.body
        
        console.log('body:',req.body)

        const createConsultaService = new ConsultaService()
        const consulta = await createConsultaService.createConsulta(
            { status, id_ficha, numero_sus, medico_crm, data_plantao})


        return res.json(consulta)
    }


    async FindAll(req:Request, res:Response){

        const findConsultaService = new ConsultaService()

        const consultas = await findConsultaService.getAll()

        return res.json(consultas)
    }

    async Find_all_by_sus(req:Request, res:Response){

        const {numero_sus} = req.params

        const findConsultaService = new ConsultaService()

        const consultas = await findConsultaService.getAllBySus(numero_sus)

        return res.json(consultas)
    }

    async Find_all_by_crm(req:Request, res:Response){

        const {crm} = req.params

        const findConsultaService = new ConsultaService()

        const consultas = await findConsultaService.getAllByCrm(crm)

        return res.json(consultas)
    }


    async Find_consulta(req:Request, res:Response){

        const {id_consulta} = req.params

        const findConsultaService = new ConsultaService()

        const consulta = await findConsultaService.consultaDetail(id_consulta)

        //const prescricoes =

        return res.json(consulta)
    }

    async Find_consultaBySus(req:Request, res:Response){

        const {numero_sus} = req.params

        const findConsultaService = new ConsultaService()

        const consulta = await findConsultaService.getBySus(numero_sus)

        return res.json(consulta)
    }
}

export { ConsultaController }