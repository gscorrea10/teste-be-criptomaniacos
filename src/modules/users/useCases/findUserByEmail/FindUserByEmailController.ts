import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindUserByEmailUseCase } from './FindUserByEmailUseCase';

class FindUserByEmailController {
  async handle(request: Request, response: Response) {
    const email = request.body;
    const findUserByEmailUseCase = container.resolve(FindUserByEmailUseCase);
    const result = await findUserByEmailUseCase.execute(email);

    return response.status(200).json(result);
  }
}

export { FindUserByEmailController };
