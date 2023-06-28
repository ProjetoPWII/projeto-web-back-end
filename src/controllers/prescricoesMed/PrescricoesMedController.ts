import { Request, Response } from "express";
import { PrescricoesMedService } from "../../services/prescricaoMed/PrescricaoMed";

class PrescricoesMedController {

    async handlePrescricao(req: Request, res: Response) {
     
        const {id_prescricao, qtde_caixas, id_medicacao} = req.body
        
        console.log('body:',req.body)

        const createPrescricaoMedService = new PrescricoesMedService()
        const prescricao = await createPrescricaoMedService.createPrescricaoMed(
            { id_prescricao, qtde_caixas, id_medicacao })


        return res.json(prescricao)
    }


    async FindAll(req:Request, res:Response){

       // const {id_ficha} = req.params

        const findPrescricoesService = new PrescricoesMedService()

        const prescricoes = await findPrescricoesService.getAll()

        return res.json(prescricoes)
    }

    async FindById(req:Request, res:Response){

        const {id} = req.params
 
         const findPrescricoesService = new PrescricoesMedService()
 
         const prescricao = await findPrescricoesService.getById(id)
 
         return res.json(prescricao)
     }
}

export { PrescricoesMedController }