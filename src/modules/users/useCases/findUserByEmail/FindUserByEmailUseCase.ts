import { AppError } from '../../../../shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  email: string;
}

@injectable()
class FindUserByEmailUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}
  async execute({ email }: IRequest) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email does not exist');
    }
    return user;
  }
}

export { FindUserByEmailUseCase };
