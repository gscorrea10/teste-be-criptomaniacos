import { Coins } from '@prisma/client';
import { ICreateCoinDTO } from '../dtos/ICreateCoinDTO';

interface ICoinsRepository {
  create(coins: ICreateCoinDTO): Promise<Coins>;
}

export { ICoinsRepository };
