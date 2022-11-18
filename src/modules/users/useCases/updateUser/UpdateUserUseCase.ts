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

@injectable()
class UpdateUserUseCase {
  constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) {}

  async execute(id: string, data: IRequest): Promise<Users> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new AppError('User not found');
    }

    user.cpf = data.cpf;
    user.email = data.email;
    user.name = data.name;
    user.phone = data.phone;
    user.updatedAt = new Date();
    await this.usersRepository.update(user);

    return user;
  }
}

export { UpdateUserUseCase };
