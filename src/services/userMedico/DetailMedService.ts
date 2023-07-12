import prismaClient from "../../prisma";

class DetailMedService {
  async execute(crm: string) {
    const user = await prismaClient.medico.findFirst({
      where: {
        crm,
      },
      include: {
        endereco: true,
        Consulta: true,
      },
    });

    return user;
  }
}

export { DetailMedService };
