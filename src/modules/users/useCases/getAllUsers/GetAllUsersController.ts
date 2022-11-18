import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetAllUsersUseCase } from './GetAllUsersUseCase';

class GetAllUsersController {
  async handle(request: Request, response: Response) {
    const getAllUsersUseCase = container.resolve(GetAllUsersUseCase);
    const result = await getAllUsersUseCase.execute();

    return response.json(result);
  }
}

export { GetAllUsersController };
