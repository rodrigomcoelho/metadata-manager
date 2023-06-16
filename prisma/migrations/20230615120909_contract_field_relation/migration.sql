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
    CONSTRAINT "ContractField_fieldParentId_fkey" FOREIGN KEY ("fieldParentId") REFERENCES "ContractField" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ContractField" ("contractId", "fieldDescription", "fieldMode", "fieldName", "fieldParentId", "fieldType", "id") SELECT "contractId", "fieldDescription", "fieldMode", "fieldName", "fieldParentId", "fieldType", "id" FROM "ContractField";
DROP TABLE "ContractField";
ALTER TABLE "new_ContractField" RENAME TO "ContractField";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
