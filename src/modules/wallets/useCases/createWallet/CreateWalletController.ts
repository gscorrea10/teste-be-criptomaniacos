import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateWalletUseCase } from './CreateWalletUseCase';

class CreateWalletController {
  async handle(request: Request, response: Response) {
    const { name_wallet, email } = request.body;
    const createWalletUseCase = container.resolve(CreateWalletUseCase);
    const result = await createWalletUseCase.execute({
      name_wallet,
      email,
    });

    return response.status(201).json(result);
  }
}

export { CreateWalletController };
