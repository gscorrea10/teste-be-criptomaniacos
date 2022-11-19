import { Router } from 'express';
import { userRoutes } from './users.routes';
import { walletRoutes } from './wallets.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/wallet', walletRoutes);

export { router };
