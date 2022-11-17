import { Users } from '@prisma/client';
import { ICreateUserDTO } from '../dtos/CreateUserDTO';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<Users>;
}

export { IUsersRepository };
