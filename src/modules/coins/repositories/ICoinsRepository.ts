import { Coins } from '@prisma/client';
import { ICreateCoinDTO } from '../dtos/ICreateCoinDTO';

export interface ITotalPurchaseByCoinName {
  name: string;
  name_wallet: string;
  _sum: {
    total_purchase: string;
    coin_amount: string;
  };
  _count: {};
}

interface ICoinsRepository {
  create(coins: ICreateCoinDTO): Promise<Coins>;
  purchaseByCoin(name: string, name_wallet: string): Promise<any>;
}

export { ICoinsRepository };
