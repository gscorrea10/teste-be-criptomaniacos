import { Router } from 'express';
import { FindByNameWalletController } from '../../modules/wallets/useCases/findByNameWallet/FindByNameWalletController';
import { CreateWalletController } from '../../modules/wallets/useCases/createWallet/CreateWalletController';

const walletRoutes = Router();
const createWalletController = new CreateWalletController();
const findByNameWalletController = new FindByNameWalletController();

walletRoutes.post('/', createWalletController.handle);
walletRoutes.get('/byname', findByNameWalletController.handle);

export { walletRoutes };
