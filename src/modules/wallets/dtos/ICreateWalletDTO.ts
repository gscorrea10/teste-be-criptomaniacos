interface ICreateWalletDTO {
  id?: string;
  name_wallet: string;
  balance?: number;
  id_user?: string;
  email: string;
  cpf?: string;
  name_user?: string;
  phone?: string;
}

export { ICreateWalletDTO };
