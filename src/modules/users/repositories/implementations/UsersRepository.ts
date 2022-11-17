import { Users } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';
import { ICreateUserDTO } from '../../dtos/CreateUserDTO';

class UsersRepository {
  async create({ id, name, email, cpf, phone }: ICreateUserDTO): Promise<Users> {
    const user = await prisma.users.create({
      data: {
        id,
        name,
        email,
        cpf,
        phone,
        updatedAt: null,
      },
    });
    return user;
  }
}

export { UsersRepository };
