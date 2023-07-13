import { Request, Response } from "express";
import { PrescricoesService } from "../../services/prescricoes/PrescricoesService";

class PrescricoesController {

    async handlePrescricao(req: Request, res: Response) {
     
        const {id_consulta, orientacoes, atestado_medico} = req.body
        
        console.log('body:',req.body)

        const createPrescricaoService = new PrescricoesService()
        const prescricao = await createPrescricaoService.createPrescricao(
            { id_consulta, orientacoes, atestado_medico })


        return res.json(prescricao)
    }



    async handleUpdatePrescricao(req:Request, res:Response){

        // const {id_ficha} = req.params
        const {id_consulta, orientacoes, atestado_medico} = req.body
 
         const findPrescricoesService = new PrescricoesService()
 
         const prescricoes = await findPrescricoesService.updatePrescricao({
            id_consulta,
            orientacoes,
            atestado_medico
         })
 
         return res.json(prescricoes)
     }


    async FindAll(req:Request, res:Response){

       // const {id_ficha} = req.params

        const findPrescricoesService = new PrescricoesService()

        const prescricoes = await findPrescricoesService.getAll()

        return res.json(prescricoes)
    }

    async FindById(req:Request, res:Response){

        const {id_consulta} = req.params
 
         const findPrescricoesService = new PrescricoesService()
 
         const prescricao = await findPrescricoesService.getById(id_consulta)
 
         return res.json(prescricao)
     }
}

export { PrescricoesController }