/*
  Warnings:

  - Added the required column `externalId` to the `Contract` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Contract" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "externalId" TEXT NOT NULL,
    "dataOwner" TEXT NOT NULL,
    "dataOwnerEmail" TEXT NOT NULL,
    "dataCustodianEmail" TEXT NOT NULL,
    "ingestionMethod" TEXT NOT NULL,
    "cronScheduler" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "sourceFormat" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Contract" ("cronScheduler", "dataCustodianEmail", "dataOwner", "dataOwnerEmail", "id", "ingestionMethod", "isActive", "sourceFormat", "tags") SELECT "cronScheduler", "dataCustodianEmail", "dataOwner", "dataOwnerEmail", "id", "ingestionMethod", "isActive", "sourceFormat", "tags" FROM "Contract";
DROP TABLE "Contract";
ALTER TABLE "new_Contract" RENAME TO "Contract";
CREATE UNIQUE INDEX "Contract_externalId_key" ON "Contract"("externalId");
CREATE INDEX "Contract_externalId_idx" ON "Contract"("externalId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE INDEX "ContractField_contractId_idx" ON "ContractField"("contractId");
