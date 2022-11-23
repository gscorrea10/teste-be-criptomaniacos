import request from 'supertest';

import 'reflect-metadata';
import { app } from '../../src/app';

describe('Find Wallet by Name', () => {
  it('should be able to find a wallet by name', async () => {
    const response = await request(app).get('/wallet/byname').send({
      name_wallet: 'test_wallet',
    });
    console.log(response.body.coins);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      name_wallet: 'test_wallet',
      createdAt: '2022-11-23T13:27:10.840Z',
      updatedAt: null,
      coins: [{}],
    });
  });

  it('should not be able to find a wallet by name', async () => {
    const response = await request(app).get('/wallet/byname').send({
      name_wallet: 'wrong name',
    });
    console.log(response.body);
    expect(response.status).toBe(400);
    expect(response.text).toEqual('{"message":"Wallet does not exist"}');
  });
});
