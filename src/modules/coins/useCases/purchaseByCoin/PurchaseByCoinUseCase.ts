import { inject, injectable } from 'tsyringe';
import { ICoinsRepository } from '../../repositories/ICoinsRepository';

@injectable()
class PurchaseByCoinUseCase {
  constructor(
    @inject('CoinsRepository') private coinsRepository: ICoinsRepository,
  ) {}
  async execute(name: string, name_wallet: string) {
    let upperName = name.toLocaleUpperCase();
    const coin = await this.coinsRepository.purchaseByCoin(
      upperName,
      name_wallet,
    );

    return coin;
  }
}

export { PurchaseByCoinUseCase };
