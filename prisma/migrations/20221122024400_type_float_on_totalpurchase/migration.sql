/*
  Warnings:

  - The `total_purchase` column on the `coins` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "coins" DROP COLUMN "total_purchase",
ADD COLUMN     "total_purchase" DOUBLE PRECISION;
