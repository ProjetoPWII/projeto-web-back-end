-- CreateTable
CREATE TABLE "pacientes" (
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "numero_sus" TEXT NOT NULL,
    "endereco_id" TEXT NOT NULL,
    "foto_perfil" TEXT NOT NULL,

    CONSTRAINT "pacientes_pkey" PRIMARY KEY ("numero_sus")
);

-- CreateTable
CREATE TABLE "medicos" (
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "crm" TEXT NOT NULL,
    "endereco_id" TEXT NOT NULL,
    "foto_perfil" TEXT NOT NULL,

    CONSTRAINT "medicos_pkey" PRIMARY KEY ("crm")
);

-- CreateTable
CREATE TABLE "enderecos" (
    "id" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "rua" TEXT NOT NULL,

    CONSTRAINT "enderecos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clinica" (
    "cnpj" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "endereco_id" TEXT NOT NULL,

    CONSTRAINT "clinica_pkey" PRIMARY KEY ("cnpj")
);

-- CreateTable
CREATE TABLE "fichas" (
    "id" TEXT NOT NULL,
    "numero_sus" TEXT NOT NULL,

    CONSTRAINT "fichas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consultas" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "id_ficha" TEXT NOT NULL,
    "numero_sus" TEXT NOT NULL,
    "medico_crm" TEXT NOT NULL,
    "data_plantao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "consultas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plantoes" (
    "data" TIMESTAMP(3) NOT NULL,
    "medico_crm" TEXT NOT NULL,
    "num_atendimentos" INTEGER NOT NULL,

    CONSTRAINT "plantoes_pkey" PRIMARY KEY ("data")
);

-- CreateTable
CREATE TABLE "status_pacientes" (
    "id" TEXT NOT NULL,
    "observacoes" TEXT NOT NULL,
    "pressao_arterial" DOUBLE PRECISION NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "id_consulta" TEXT NOT NULL,

    CONSTRAINT "status_pacientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prescricoes" (
    "id_consulta" TEXT NOT NULL,
    "orientacoes" TEXT NOT NULL,
    "atestado_medico" BOOLEAN NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "prescricoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicacoes" (
    "nome" TEXT NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "medicacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PrescricaoMedicacao" (
    "id_prescricao" TEXT NOT NULL,
    "id_medicacao" TEXT NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "PrescricaoMedicacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostInformativo" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "medico_crm" TEXT NOT NULL,

    CONSTRAINT "PostInformativo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pacientes" ADD CONSTRAINT "pacientes_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "enderecos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicos" ADD CONSTRAINT "medicos_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "enderecos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clinica" ADD CONSTRAINT "clinica_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "enderecos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichas" ADD CONSTRAINT "fichas_numero_sus_fkey" FOREIGN KEY ("numero_sus") REFERENCES "pacientes"("numero_sus") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_id_ficha_fkey" FOREIGN KEY ("id_ficha") REFERENCES "fichas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_numero_sus_fkey" FOREIGN KEY ("numero_sus") REFERENCES "pacientes"("numero_sus") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_medico_crm_fkey" FOREIGN KEY ("medico_crm") REFERENCES "medicos"("crm") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_data_plantao_fkey" FOREIGN KEY ("data_plantao") REFERENCES "plantoes"("data") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plantoes" ADD CONSTRAINT "plantoes_medico_crm_fkey" FOREIGN KEY ("medico_crm") REFERENCES "medicos"("crm") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "status_pacientes" ADD CONSTRAINT "status_pacientes_id_consulta_fkey" FOREIGN KEY ("id_consulta") REFERENCES "consultas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prescricoes" ADD CONSTRAINT "prescricoes_id_consulta_fkey" FOREIGN KEY ("id_consulta") REFERENCES "consultas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrescricaoMedicacao" ADD CONSTRAINT "PrescricaoMedicacao_id_prescricao_fkey" FOREIGN KEY ("id_prescricao") REFERENCES "prescricoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrescricaoMedicacao" ADD CONSTRAINT "PrescricaoMedicacao_id_medicacao_fkey" FOREIGN KEY ("id_medicacao") REFERENCES "medicacoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostInformativo" ADD CONSTRAINT "PostInformativo_medico_crm_fkey" FOREIGN KEY ("medico_crm") REFERENCES "medicos"("crm") ON DELETE RESTRICT ON UPDATE CASCADE;
