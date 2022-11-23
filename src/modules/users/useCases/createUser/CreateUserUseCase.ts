import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../../../../modules/users/repositories/IUsersRepository';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { AppError } from '../../../../shared/errors/AppError';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}
  async execute({ name, email, cpf, phone }: ICreateUserDTO) {
    if (!name || !email || !cpf || !phone) {
      throw new AppError('Blank field');
    }

    const user = await this.usersRepository.create({
      name,
      email,
      cpf,
      phone,
    });
    return user;
  }
}

export { CreateUserUseCase };
