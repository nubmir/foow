/*
  Warnings:

  - You are about to drop the column `user_id` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `orders` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `users` table. All the data in the column will be lost.
  - Added the required column `user_uuid` to the `bookmarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_uuid` to the `orders` table without a default value. This is not possible if the table is not empty.
  - The required column `uuid` was added to the `users` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "bookmarks" DROP CONSTRAINT "bookmarks_user_id_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_user_id_fkey";

-- AlterTable
ALTER TABLE "bookmarks" DROP COLUMN "user_id",
ADD COLUMN     "user_uuid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "user_id",
ADD COLUMN     "user_uuid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "id",
ADD COLUMN     "uuid" TEXT NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("uuid");

-- AddForeignKey
ALTER TABLE "bookmarks" ADD CONSTRAINT "bookmarks_user_uuid_fkey" FOREIGN KEY ("user_uuid") REFERENCES "users"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_uuid_fkey" FOREIGN KEY ("user_uuid") REFERENCES "users"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
