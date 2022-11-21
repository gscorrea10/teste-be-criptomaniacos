import { Router } from 'express';
import { CreateCoinController } from '../../modules/coins/useCases/createCoin/CreateCoinController';

const coinRoutes = Router();
const createCoinController = new CreateCoinController();

coinRoutes.post('/', createCoinController.handle);

export { coinRoutes };
