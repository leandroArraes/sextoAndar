-- AlterTable
ALTER TABLE "Imovel" ALTER COLUMN "tipoImovel" DROP NOT NULL,
ALTER COLUMN "endereco" DROP NOT NULL,
ALTER COLUMN "caracteristicas" DROP NOT NULL,
ALTER COLUMN "preco" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "latitude" DROP NOT NULL,
ALTER COLUMN "longitude" DROP NOT NULL;
