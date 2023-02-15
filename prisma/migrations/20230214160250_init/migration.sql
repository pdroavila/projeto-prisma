-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT
);
INSERT INTO "new_clientes" ("cpf", "email", "id", "nome") SELECT "cpf", "email", "id", "nome" FROM "clientes";
DROP TABLE "clientes";
ALTER TABLE "new_clientes" RENAME TO "clientes";
CREATE UNIQUE INDEX "clientes_cpf_key" ON "clientes"("cpf");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
