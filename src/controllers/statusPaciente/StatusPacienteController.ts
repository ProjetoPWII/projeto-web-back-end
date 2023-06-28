import { Request, Response } from "express";
import { StatusService } from "../../services/statusPaciente/StatusService";

class StatusPacienteController {

    async handleStatus(req: Request, res: Response) {
     
        const {observacoes, pressao_arterial, peso, id_consulta} = req.body
        
        console.log('body:',req.body)

        const createStatusService = new StatusService()
        const status = await createStatusService.createStatus(
            { observacoes, pressao_arterial, peso, id_consulta })


        return res.json(status)
    }


    // async FindAll(req:Request, res:Response){

    //    // const {id_ficha} = req.params

    //     const findStatusService = new StatusService()

    //     const prescricoes = await findStatusService.getAll()

    //     return res.json(prescricoes)
    // }

    // async FindById(req:Request, res:Response){

    //     const {id_consulta} = req.params
 
    //      const findStatusService = new StatusService()
 
    //      const prescricao = await findStatusService.getById(id_consulta)
 
    //      return res.json(prescricao)
    //  }
}

export { StatusPacienteController }