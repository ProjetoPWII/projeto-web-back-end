/*
  Warnings:

  - Added the required column `senha` to the `medicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `pacientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "medicos" ADD COLUMN     "senha" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pacientes" ADD COLUMN     "senha" TEXT NOT NULL;
