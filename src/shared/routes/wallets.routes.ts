import { Router } from 'express';
import { CreateWalletController } from '../../modules/wallets/useCases/createWallet/CreateWalletController';

const walletRoutes = Router();
const createWalletController = new CreateWalletController();

walletRoutes.post('/', createWalletController.handle);

export { walletRoutes };
