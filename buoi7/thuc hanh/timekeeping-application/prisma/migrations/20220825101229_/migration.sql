/*
  Warnings:

  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `checkout` on the `Timekeeping` table. All the data in the column will be lost.
  - Added the required column `employeeName` to the `Timekeeping` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Employee";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Timekeeping" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "employeeId" INTEGER NOT NULL,
    "employeeName" TEXT NOT NULL,
    "time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "checkin" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Timekeeping" ("checkin", "employeeId", "id", "time") SELECT coalesce("checkin", true) AS "checkin", "employeeId", "id", "time" FROM "Timekeeping";
DROP TABLE "Timekeeping";
ALTER TABLE "new_Timekeeping" RENAME TO "Timekeeping";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
