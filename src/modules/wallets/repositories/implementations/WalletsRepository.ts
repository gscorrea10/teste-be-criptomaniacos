import { Wallets } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';
import { ICreateWalletDTO } from '../../dtos/ICreateWalletDTO';

class WalletsRepository {
  async create(wallets: ICreateWalletDTO): Promise<Wallets> {
    const wallet = await prisma.wallets.create({
      data: {
        name_wallet: wallets.name_wallet,
        balance: null,
        updatedAt: null,
        Users: {
          connect: {
            email: wallets.email,
          },
        },
      },
      include: {
        Users: true,
      },
    });
    return wallet;
  }
}

export { WalletsRepository };
