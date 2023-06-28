/*
  Warnings:

  - Added the required column `sexo` to the `medicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sexo` to the `pacientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "medicos" ADD COLUMN     "sexo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pacientes" ADD COLUMN     "sexo" TEXT NOT NULL;
