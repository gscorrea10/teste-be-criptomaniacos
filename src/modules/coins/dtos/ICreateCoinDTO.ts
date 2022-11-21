import { ICreateWalletDTO } from '../../wallets/dtos/ICreateWalletDTO';

interface ICreateCoinDTO {
  id?: string;
  name: string;
  price: number;
  coin_amount: number;
  name_wallet: string;
}

export { ICreateCoinDTO };
