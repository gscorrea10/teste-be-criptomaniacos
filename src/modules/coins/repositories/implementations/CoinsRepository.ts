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
        total_purchase: coins.total_pruchase,
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

  async purchaseByCoin(name: string, name_wallet: string) {
    const coin = await prisma.coins.groupBy({
      by: ['name'],
      where: {
        name: {
          contains: name,
        },
        wallets: {
          some: {
            Wallets: {
              name_wallet: name_wallet,
            },
          },
        },
      },
      _sum: {
        total_purchase: true,
        coin_amount: true,
      },
      _count: true,
    });

    return coin;
  }
}

export { CoinsRepository };
