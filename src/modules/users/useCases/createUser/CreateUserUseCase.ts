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

    if (email || cpf) {
      throw new AppError('Email or CPF already exist in the db');
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
