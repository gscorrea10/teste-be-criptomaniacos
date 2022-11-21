import { container } from 'tsyringe';
import { IUsersRepository } from '../../../src/modules/users/repositories/IUsersRepository';
import { IWalletsRepository } from '../../../src/modules/wallets/repositories/IWalletsRepository';
import { UsersRepository } from '../../../src/modules/users/repositories/implementations/UsersRepository';
import { WalletsRepository } from '../../../src/modules/wallets/repositories/implementations/WalletsRepository';
import { CoinsRepository } from '../../modules/coins/repositories/implementations/CoinsRepository';
import { ICoinsRepository } from '../../modules/coins/repositories/ICoinsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
container.registerSingleton<IWalletsRepository>(
  'WalletsRepository',
  WalletsRepository,
);
container.registerSingleton<ICoinsRepository>(
  'CoinsRepository',
  CoinsRepository,
);
