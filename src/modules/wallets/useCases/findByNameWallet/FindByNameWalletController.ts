import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindByNameWalletUseCase } from './FindByNameWalletUseCase';

class FindByNameWalletController {
  async handle(request: Request, response: Response) {
    const name_wallet = request.body;
    const findByNameWalletUseCase = container.resolve(FindByNameWalletUseCase);
    const result = await findByNameWalletUseCase.execute(name_wallet);

    return response.status(200).json(result);
  }
}

export { FindByNameWalletController };
