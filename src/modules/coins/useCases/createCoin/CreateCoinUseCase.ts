import { inject, injectable } from 'tsyringe';
import { ICoinsRepository } from '../../repositories/ICoinsRepository';
import { AppError } from '../../../../shared/errors/AppError';
import { IWalletsRepository } from '../../../wallets/repositories/IWalletsRepository';
import { Coins } from '@prisma/client';

interface IRequest {
  name_wallet: string;
  coin_amount: number;
  price: number;
  name: 'BTC' | 'ETH' | 'USDT';
  total_purchase?: number | string;
}

interface IResponse {
  id: string;
  name: string;
  price: number | string;
  coin_amount: number;
  total_purchase: number | string;
  createdAt: Date;
  updatedAt: Date | null;
}

@injectable()
class CreateCoinUseCase {
  constructor(
    @inject('CoinsRepository') private coinsRepository: ICoinsRepository,
    @inject('WalletsRepository') private walletsRepository: IWalletsRepository,
  ) {}
  async execute(data: IRequest): Promise<IResponse> {
    const uperName = data.name.toLocaleUpperCase();

    if (uperName != 'BTC' && uperName != 'ETH' && uperName != 'USDT') {
      throw new AppError('You must chose BTC, ETH or USDT');
    }

    let wallet = await this.walletsRepository.findByNameWallet(
      data.name_wallet,
    );

    if (!wallet) {
      throw new AppError('Wallet does not exist');
    }

    const coins = await this.coinsRepository.create({
      name_wallet: data.name_wallet,
      name: uperName,
      price: data.price,
      coin_amount: data.coin_amount,
      total_pruchase: data.price * data.coin_amount,
    });

    return this.responseReturn(coins);
  }

  private responseReturn(coins: Coins): IResponse {
    const response: IResponse = {
      id: coins.id,
      name: coins.name,
      price: coins.price + ' USD',
      coin_amount: coins.coin_amount,
      total_purchase: coins.total_purchase + ' USD',
      createdAt: coins.createdAt,
      updatedAt: null,
    };
    return response;
  }
}

export { CreateCoinUseCase };
