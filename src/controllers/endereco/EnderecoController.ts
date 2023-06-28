import { Request, Response } from "express";
import { EnderecoService } from "../../services/endereco/EnderecoService";

class EnderecoController {

    async handleEndereco(req: Request, res: Response) {
     
        const { cidade, estado, bairro, rua} = req.body
        
        console.log('body:',req.body)

        const createEnderecoService = new EnderecoService()
        const endereco = await createEnderecoService.createEndereco(
            { cidade, estado, bairro, rua })


        return res.json(endereco)
    }


    async FindById(req:Request, res:Response){

        const {endereco_id} = req.params

        const findEnderecoService = new EnderecoService()

        const enderecos = await findEnderecoService.get(endereco_id)

        return res.json(enderecos)
    }
}

export { EnderecoController }