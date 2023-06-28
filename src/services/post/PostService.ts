import prismaClient from "../../prisma";

interface PostRequest {
  titulo:string
  descricao:string
  data:Date
  medico_crm:string
}

class PostService {
  
    async createPost({titulo, descricao, data, medico_crm}: PostRequest) {

        const post = await prismaClient.postInformativo.create({
            data: {
                titulo,
                descricao,
                data,
                medico_crm
            },
            select: {
              medico_crm:true,
              data:true,
              titulo:true,
              descricao:true
            }
        })

        return post

 }
}
export {PostService}