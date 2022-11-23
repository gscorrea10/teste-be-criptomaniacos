import request from 'supertest';

import 'reflect-metadata';
import { app } from '../../src/app';

describe('Create Coin', () => {
  it('should be able to create a new coin', async () => {
    const response = await request(app).post('/coin').send({
      name_wallet: 'test_wallet',
      coin_amount: 2,
      price: 22.23,
      name: 'btc',
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to create a new coin', async () => {
    const response = await request(app).post('/coin').send({
      name_wallet: 'invalido',
      coin_amount: 2,
      price: 22.23,
      name: 'btc',
    });
    expect(response.status).toBe(400);
    expect(response.text).toEqual('{"message":"Wallet does not exist"}');
  });

  it('should not be able to create a new coin', async () => {
    const response = await request(app).post('/coin').send({
      name_wallet: 'invalido',
      coin_amount: 2,
      price: 22.23,
      name: 'random coin',
    });
    expect(response.status).toBe(400);
    expect(response.text).toEqual(
      '{"message":"You must chose BTC, ETH or USDT"}',
    );
  });
});
