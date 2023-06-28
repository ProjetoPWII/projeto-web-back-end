/*
  Warnings:

  - Added the required column `qtde_caixas` to the `prescricoes_medicacoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "prescricoes_medicacoes" ADD COLUMN     "qtde_caixas" INTEGER NOT NULL;
