import { inject, injectable } from 'tsyringe';
import { Wallets } from '@prisma/client';
import { IWalletsRepository } from '../../repositories/IWalletsRepository';
import { AppError } from '../../../../shared/errors/AppError';

interface IRequest {
  name_wallet: string;
}

@injectable()
class FindByNameWalletUseCase {
  constructor(
    @inject('WalletsRepository') private walletsRepository: IWalletsRepository,
  ) {}
  async execute({ name_wallet }: IRequest): Promise<Wallets | null> {
    const wallet = await this.walletsRepository.findByNameWallet(name_wallet);

    if (!wallet) {
      throw new AppError('Wallet does not exist');
    }

    return wallet;
  }
}

export { FindByNameWalletUseCase };
