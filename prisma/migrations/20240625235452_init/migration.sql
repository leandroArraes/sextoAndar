-- CreateTable
CREATE TABLE "Imovel" (
    "id" SERIAL NOT NULL,
    "tipoImovel" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "caracteristicas" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "informacoesAdicionais" TEXT,
    "fotos" TEXT[],
    "usuarioId" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,

    CONSTRAINT "Imovel_pkey" PRIMARY KEY ("id")
);
