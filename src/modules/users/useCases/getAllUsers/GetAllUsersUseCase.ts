import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class GetAllUsersUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}
  async execute() {
    const users = await this.usersRepository.listAllUsers();
    return users;
  }
}

export { GetAllUsersUseCase };
