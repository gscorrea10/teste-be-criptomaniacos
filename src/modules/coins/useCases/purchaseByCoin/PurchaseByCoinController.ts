import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { PurchaseByCoinUseCase } from './PurchaseByCoinUseCase';

class PurchaseByCoinController {
  async handle(request: Request, response: Response) {
    const { name, name_wallet } = request.body;
    const purchaseByCoinUseCase = container.resolve(PurchaseByCoinUseCase);
    const result = await purchaseByCoinUseCase.execute(name, name_wallet);

    return response.status(200).json(result);
  }
}

export { PurchaseByCoinController };
