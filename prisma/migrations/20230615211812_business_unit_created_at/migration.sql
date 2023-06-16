-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BusinessUnit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_BusinessUnit" ("code", "id", "name") SELECT "code", "id", "name" FROM "BusinessUnit";
DROP TABLE "BusinessUnit";
ALTER TABLE "new_BusinessUnit" RENAME TO "BusinessUnit";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
