import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCoinUseCase } from './CreateCoinUseCase';

class CreateCoinController {
  async handle(request: Request, response: Response) {
    const { name_wallet, name, price, coin_amount } = request.body;
    const createCoinUseCase = container.resolve(CreateCoinUseCase);
    const result = await createCoinUseCase.execute({
      coin_amount,
      name,
      name_wallet,
      price,
    });
    return response.status(201).json(result);
  }
}

export { CreateCoinController };
