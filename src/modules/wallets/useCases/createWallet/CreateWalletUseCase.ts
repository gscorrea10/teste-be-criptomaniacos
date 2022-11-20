import { inject, injectable } from 'tsyringe';
import { IWalletsRepository } from '../../repositories/IWalletsRepository';
import { IUsersRepository } from '../../../users/repositories/IUsersRepository';
import { ICreateWalletDTO } from '../../dtos/ICreateWalletDTO';
import { AppError } from '../../../../shared/errors/AppError';
import { Wallets } from '@prisma/client';

interface IRequest {
  name_wallet: string;
  email: string;
}

@injectable()
class CreateWalletUseCase {
  constructor(
    @inject('WalletsRepository')
    private walletsRepository: IWalletsRepository,
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}
  async execute(data: IRequest): Promise<Wallets> {
    if (!data.email || !data.name_wallet) {
      throw new AppError('Name Wallet or Email empty');
    }

    const user = await this.usersRepository.findByEmail(data.email);
    if (!user) {
      throw new AppError('Email doest not exist');
    }

    const wallet = await this.walletsRepository.create(data);
    return wallet;
  }
}

export { CreateWalletUseCase };
