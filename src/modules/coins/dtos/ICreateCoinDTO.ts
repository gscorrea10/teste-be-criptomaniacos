interface ICreateCoinDTO {
  id?: string;
  name: string;
  price: number;
  coin_amount: number;
  total_pruchase?: number;
  name_wallet?: string;
}

export { ICreateCoinDTO };
