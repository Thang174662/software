/*
  Warnings:

  - You are about to drop the column `authorId` on the `Timekeeping` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Timekeeping" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "employeeId" INTEGER NOT NULL,
    "time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "checkin" BOOLEAN,
    "checkout" BOOLEAN,
    CONSTRAINT "Timekeeping_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Timekeeping" ("checkin", "checkout", "employeeId", "id", "time") SELECT "checkin", "checkout", "employeeId", "id", "time" FROM "Timekeeping";
DROP TABLE "Timekeeping";
ALTER TABLE "new_Timekeeping" RENAME TO "Timekeeping";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
