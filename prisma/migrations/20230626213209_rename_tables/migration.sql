/*
  Warnings:

  - You are about to drop the `PostInformativo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PrescricaoMedicacao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PostInformativo" DROP CONSTRAINT "PostInformativo_medico_crm_fkey";

-- DropForeignKey
ALTER TABLE "PrescricaoMedicacao" DROP CONSTRAINT "PrescricaoMedicacao_id_medicacao_fkey";

-- DropForeignKey
ALTER TABLE "PrescricaoMedicacao" DROP CONSTRAINT "PrescricaoMedicacao_id_prescricao_fkey";

-- DropTable
DROP TABLE "PostInformativo";

-- DropTable
DROP TABLE "PrescricaoMedicacao";

-- CreateTable
CREATE TABLE "prescricoes_medicacoes" (
    "id_prescricao" TEXT NOT NULL,
    "id_medicacao" TEXT NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "prescricoes_medicacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "medico_crm" TEXT NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "prescricoes_medicacoes" ADD CONSTRAINT "prescricoes_medicacoes_id_prescricao_fkey" FOREIGN KEY ("id_prescricao") REFERENCES "prescricoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prescricoes_medicacoes" ADD CONSTRAINT "prescricoes_medicacoes_id_medicacao_fkey" FOREIGN KEY ("id_medicacao") REFERENCES "medicacoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_medico_crm_fkey" FOREIGN KEY ("medico_crm") REFERENCES "medicos"("crm") ON DELETE RESTRICT ON UPDATE CASCADE;
