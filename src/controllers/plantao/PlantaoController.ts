import { Request, Response } from "express";
import { PlantaoService } from "../../services/plantao/PlantaoService";

class PlantaoController {

    async handlePlantao(req: Request, res: Response) {
     
        const {data,medico_crm,num_atendimentos} = req.body
        
        console.log('body:',req.body)

        const createPlantaoService = new PlantaoService()
        const plantao = await createPlantaoService.createPlantao({data,medico_crm,num_atendimentos})


        return res.json(plantao)
    }

    async FindAll(req:Request, res:Response){

        //const {id_ficha} = req.params

        const findPlantaoService = new PlantaoService()

        const plantoes = await findPlantaoService.getAll()

        return res.json(plantoes)
    }

    async FindByData(req:Request, res:Response){

        const {data} = req.body
 
         const findPlantaoService = new PlantaoService()
 
         const ficha = await findPlantaoService.getByData(data)
 
         return res.json(ficha)
     }
}


export { PlantaoController }