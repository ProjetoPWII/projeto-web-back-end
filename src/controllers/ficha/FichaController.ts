import { Request, Response } from "express";
import { FichaService } from "../../services/ficha/FichaService";

class FichaController {

    async handleFicha(req: Request, res: Response) {
     
        const {numero_sus} = req.body
        
        console.log('body:',req.body)

        const createFichaService = new FichaService()
        const ficha = await createFichaService.createFicha(
            { numero_sus })


        return res.json(ficha)
    }


    async FindAll(req:Request, res:Response){

       // const {id_ficha} = req.params

        const findFichaService = new FichaService()

        const fichas = await findFichaService.getAll()

        return res.json(fichas)
    }

    async FindBySus(req:Request, res:Response){

        const {numero_sus} = req.params
 
         const findFichaService = new FichaService()
 
         const ficha = await findFichaService.getBySus(numero_sus)
 
         return res.json(ficha)
     }
}

export { FichaController }