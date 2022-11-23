import { Wallets } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';
import { ICreateWalletDTO } from '../../dtos/ICreateWalletDTO';

class WalletsRepository {
  async create(wallets: ICreateWalletDTO): Promise<Wallets> {
    const wallet = await prisma.wallets.create({
      data: {
        name_wallet: wallets.name_wallet,
        updatedAt: null,
        Users: {
          connect: {
            email: wallets.email,
          },
        },
      },
      include: {
        Users: {
          select: {
            name: true,
            email: true,
            cpf: true,
            phone: true,
          },
        },
      },
    });
    return wallet;
  }

  async findByNameWallet(name_wallet: string): Promise<Wallets | null> {
    const wallet = await prisma.wallets.findUnique({
      where: {
        name_wallet: name_wallet,
      },
      include: {
        coins: {
          select: {
            Coins: {
              select: {
                name: true,
                price: true,
                coin_amount: true,
                total_purchase: true,
                id: true,
              },
            },
          },
        },
      },
    });
    return wallet;
  }
}

export { WalletsRepository };
