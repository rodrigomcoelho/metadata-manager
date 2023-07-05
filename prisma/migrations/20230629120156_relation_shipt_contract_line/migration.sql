-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ContractField" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "contractId" TEXT NOT NULL,
    "fieldName" TEXT NOT NULL,
    "fieldType" TEXT NOT NULL,
    "fieldMode" TEXT NOT NULL,
    "fieldDescription" TEXT NOT NULL,
    "fieldParentId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ContractField_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ContractField_fieldParentId_fkey" FOREIGN KEY ("fieldParentId") REFERENCES "ContractField" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ContractField" ("contractId", "createdAt", "fieldDescription", "fieldMode", "fieldName", "fieldParentId", "fieldType", "id", "updatedAt") SELECT "contractId", "createdAt", "fieldDescription", "fieldMode", "fieldName", "fieldParentId", "fieldType", "id", "updatedAt" FROM "ContractField";
DROP TABLE "ContractField";
ALTER TABLE "new_ContractField" RENAME TO "ContractField";
CREATE INDEX "ContractField_contractId_idx" ON "ContractField"("contractId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
