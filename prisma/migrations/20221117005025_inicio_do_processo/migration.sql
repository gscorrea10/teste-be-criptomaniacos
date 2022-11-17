-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wallets" (
    "id" TEXT NOT NULL,
    "usersId" TEXT NOT NULL,
    "name_wallet" TEXT NOT NULL,
    "balance" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "wallets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coins" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "coin_amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "coins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoinsOnWallets" (
    "walletsId" TEXT NOT NULL,
    "coinsId" TEXT NOT NULL,

    CONSTRAINT "CoinsOnWallets_pkey" PRIMARY KEY ("coinsId","walletsId")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "wallets_id_key" ON "wallets"("id");

-- CreateIndex
CREATE UNIQUE INDEX "wallets_name_wallet_key" ON "wallets"("name_wallet");

-- CreateIndex
CREATE UNIQUE INDEX "coins_id_key" ON "coins"("id");

-- AddForeignKey
ALTER TABLE "wallets" ADD CONSTRAINT "wallets_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoinsOnWallets" ADD CONSTRAINT "CoinsOnWallets_walletsId_fkey" FOREIGN KEY ("walletsId") REFERENCES "wallets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoinsOnWallets" ADD CONSTRAINT "CoinsOnWallets_coinsId_fkey" FOREIGN KEY ("coinsId") REFERENCES "coins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
