/*
  Warnings:

  - You are about to drop the `orders_on_foods` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `category_id` on table `foods` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `step` on the `methods` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `food_id` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "foods" DROP CONSTRAINT "foods_category_id_fkey";

-- DropForeignKey
ALTER TABLE "orders_on_foods" DROP CONSTRAINT "orders_on_foods_food_id_fkey";

-- DropForeignKey
ALTER TABLE "orders_on_foods" DROP CONSTRAINT "orders_on_foods_order_id_fkey";

-- AlterTable
ALTER TABLE "foods" ALTER COLUMN "category_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "methods" DROP COLUMN "step",
ADD COLUMN     "step" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "food_id" INTEGER NOT NULL,
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "orders_on_foods";

-- AddForeignKey
ALTER TABLE "foods" ADD CONSTRAINT "foods_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
