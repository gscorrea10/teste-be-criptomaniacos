import { inject, injectable } from 'tsyringe';
import { Users } from '@prisma/client';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { AppError } from '../../../../shared/errors/AppError';

interface IRequest {
  name: string;
  cpf: string;
  email: string;
  phone: string;
}

interface IResponse {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  async execute(id: string, data: IRequest): Promise<Users> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new AppError('User not found');
    }

    const response: IResponse = {
      id: user.id,
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      phone: data.phone,
      createdAt: user.createdAt,
      updatedAt: new Date(),
    };

    await this.usersRepository.update(response);

    return response;
  }
}

export { UpdateUserUseCase };
