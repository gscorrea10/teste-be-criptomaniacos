import request from 'supertest';

import 'reflect-metadata';
import { app } from '../../src/app';

describe('List how many coins you have and money spent ', () => {
  it('should be able to list', async () => {
    const response = await request(app).get('/coin/purchaseBycoin').send({
      name_wallet: 'test_wallet',
      name: 'btc',
    });
    expect(response.status).toBe(200);
  });
});
