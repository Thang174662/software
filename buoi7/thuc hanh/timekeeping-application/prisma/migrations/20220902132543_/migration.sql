-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Timekeeping" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "employeeId" TEXT NOT NULL,
    "employeeName" TEXT NOT NULL,
    "time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "checkin" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Timekeeping" ("checkin", "employeeId", "employeeName", "id", "time") SELECT "checkin", "employeeId", "employeeName", "id", "time" FROM "Timekeeping";
DROP TABLE "Timekeeping";
ALTER TABLE "new_Timekeeping" RENAME TO "Timekeeping";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
