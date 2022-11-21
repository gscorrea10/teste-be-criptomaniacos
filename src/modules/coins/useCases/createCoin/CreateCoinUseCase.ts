import { inject, injectable } from 'tsyringe';
import { ICoinsRepository } from '../../repositories/ICoinsRepository';
import { AppError } from '../../../../shared/errors/AppError';
import { IWalletsRepository } from '../../../wallets/repositories/IWalletsRepository';

interface IRequest {
  name_wallet: string;
  coin_amount: number;
  price: number;
  name: 'BTC' | 'ETH' | 'USDT';
}

interface IResponse {
  total_value: number | string;
  coins: IRequest;
}

@injectable()
class CreateCoinUseCase {
  constructor(
    @inject('CoinsRepository') private coinsRepository: ICoinsRepository,
    @inject('WalletsRepository') private walletsRepository: IWalletsRepository,
  ) {}
  async execute(data: IRequest) {
    const uperName = data.name.toUpperCase();

    if (uperName != 'BTC' && uperName != 'ETH' && uperName != 'USDT') {
      throw new AppError('You must chose BTC, ETH or USDT');
    }

    let wallet = await this.walletsRepository.findByNameWallet(
      data.name_wallet,
    );

    if (!wallet) {
      throw new AppError('Wallet does not exist');
    }

    await this.coinsRepository.create(data);

    let response: IResponse = {
      total_value: data.price * data.coin_amount + ' USD',
      coins: {
        coin_amount: data.coin_amount,
        name: data.name,
        name_wallet: data.name_wallet,
        price: data.price,
      },
    };

    console.log(response);
    return response;
  }
}

export { CreateCoinUseCase };
