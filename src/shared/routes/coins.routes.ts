import { Router } from 'express';
import { PurchaseByCoinController } from '../../modules/coins/useCases/purchaseByCoin/PurchaseByCoinController';
import { CreateCoinController } from '../../modules/coins/useCases/createCoin/CreateCoinController';

const coinRoutes = Router();
const createCoinController = new CreateCoinController();
const purchaseByCoinController = new PurchaseByCoinController();

coinRoutes.post('/', createCoinController.handle);
coinRoutes.get('/purchaseByCoin', purchaseByCoinController.handle);

export { coinRoutes };
