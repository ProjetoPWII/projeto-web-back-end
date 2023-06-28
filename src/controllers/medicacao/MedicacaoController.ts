import { Request, Response } from "express";
import { MedicacaoService } from "../../services/medicacao/MedicacaoService";

class MedicacaoController {

    async handleMedicacao(req: Request, res: Response) {
     
        const {nome} = req.body

        const createMedicacaoService = new MedicacaoService()
        const ficha = await createMedicacaoService.createMedicacao(
            { nome })


        return res.json(ficha)
    }


    async FindAll(req:Request, res:Response){

        const findMedicacaoService = new MedicacaoService()

        const medicacoes = await findMedicacaoService.getAll()

        return res.json(medicacoes)
    }

    async FindById(req:Request, res:Response){

        const {id} = req.params
 
         const findMedicacaoService = new MedicacaoService()
 
         const medicacao = await findMedicacaoService.getById(id)
 
         return res.json(medicacao)
     }
}

export { MedicacaoController }