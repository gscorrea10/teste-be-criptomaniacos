import request from 'supertest';

import 'reflect-metadata';
import { app } from '../../src/app';

describe('Create Wallet', () => {
  it('should be able to create a new wallet', async () => {
    const response = await request(app).post('/wallet').send({
      name_wallet: 'test_wallet',
      email: 'test@gmail.com',
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to create a new wallet', async () => {
    const response = await request(app).post('/wallet').send({
      name_wallet: 'test_wallet2',
      email: 'test2@gmail.com',
    });
    expect(response.status).toBe(400);
    expect(response.text).toEqual('{"message":"Email does not exist"}');
  });

  it('should not be able to create a new wallet', async () => {
    const response = await request(app).post('/wallet').send({
      name_wallet: '',
      email: 'test2@gmail.com',
    });
    console.log(response.body);
    expect(response.status).toBe(400);
    expect(response.text).toEqual(
      '{"message":"Name of Wallet or Email is empty"}',
    );
  });
});
