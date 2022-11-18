import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { AppError } from '../../../../shared/errors/AppError';

@injectable()
class DeleteUserUseCase {
  constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) {}
  async execute(id: string): Promise<void> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new AppError('User does not exist');
    }
    await this.usersRepository.deleteUser(id);
  }
}

export { DeleteUserUseCase };
