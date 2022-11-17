import { container } from 'tsyringe';
import { IUsersRepository } from '../../../src/modules/users/repositories/IUsersRepository';
import { UsersRepository } from '../../../src/modules/users/repositories/implementations/UsersRepository';

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
