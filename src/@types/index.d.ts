declare namespace Express{
    export interface Request{
        numero_sus:string
        crm:string
        foto_perfil:Express.Multer.File,
        session:any
    }
}