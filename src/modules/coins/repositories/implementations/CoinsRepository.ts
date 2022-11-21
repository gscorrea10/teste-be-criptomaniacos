import { Coins } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';
import { ICreateCoinDTO } from '../../dtos/ICreateCoinDTO';

class CoinsRepository {
  async create(coins: ICreateCoinDTO): Promise<Coins> {
    const coin = await prisma.coins.create({
      data: {
        name: coins.name,
        price: coins.price,
        coin_amount: coins.coin_amount,
        updatedAt: null,
        wallets: {
          create: {
            Wallets: {
              connect: {
                name_wallet: coins.name_wallet,
              },
            },
          },
        },
      },
    });
    return coin;
  }
}

export { CoinsRepository };
