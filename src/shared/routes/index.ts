import { Router } from 'express';
import { userRoutes } from './users.routes';
import { walletRoutes } from './wallets.routes';
import { coinRoutes } from './coins.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/wallet', walletRoutes);
router.use('/coin', coinRoutes);

export { router };
