import { Users } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '../../dtos/IUpdateUserDTO';

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

  async update(data: IUpdateUserDTO): Promise<Users> {
    const user = await prisma.users.update({
      where: {
        id: data.id,
      },
      data: {
        cpf: data.cpf,
        email: data.email,
        name: data.name,
        phone: data.phone,
        updatedAt: new Date(),
      },
    });
    return user;
  }

  async findById(id: string): Promise<Users | null> {
    const user = await prisma.users.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  async findByEmail(email: string): Promise<Users | null> {
    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });
    return user;
  }

  async listAllUsers(): Promise<Users[]> {
    const users = await prisma.users.findMany({
      select: {
        id: true,
        name: true,
        cpf: true,
        email: true,
        phone: true,
        createdAt: true,
        updatedAt: true,
        wallets: true,
      },
    });
    return users;
  }

  async deleteUser(id: string): Promise<void> {
    await prisma.users.delete({
      where: {
        id,
      },
    });
  }
}

export { UsersRepository };
