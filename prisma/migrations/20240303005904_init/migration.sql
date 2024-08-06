/*
  Warnings:

  - You are about to drop the column `categoryName` on the `Marca` table. All the data in the column will be lost.
  - Added the required column `marcaName` to the `Marca` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Marca" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "marcaName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Marca" ("createdAt", "id", "updatedAt") SELECT "createdAt", "id", "updatedAt" FROM "Marca";
DROP TABLE "Marca";
ALTER TABLE "new_Marca" RENAME TO "Marca";
CREATE UNIQUE INDEX "Marca_marcaName_key" ON "Marca"("marcaName");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
