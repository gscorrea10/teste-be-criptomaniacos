import { Users } from '@prisma/client';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '../dtos/IUpdateUserDTO';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<Users>;
  update(data: IUpdateUserDTO): Promise<Users>;
  findById(id: string): Promise<Users | null>;
  findByEmail(email: string): Promise<Users | null>;
  listAllUsers(): Promise<Users[]>;
  deleteUser(id: string): Promise<void>;
}

export { IUsersRepository };
