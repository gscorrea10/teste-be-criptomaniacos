import { Wallets } from '@prisma/client';
import { ICreateWalletDTO } from '../dtos/ICreateWalletDTO';

interface IWalletsRepository {
  create(wallets: ICreateWalletDTO): Promise<Wallets>;
  findByNameWallet(name_wallet: string): Promise<Wallets | null>;
}

export { IWalletsRepository };
