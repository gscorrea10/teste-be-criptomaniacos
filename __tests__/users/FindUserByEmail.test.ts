import request from 'supertest';

import 'reflect-metadata';
import { app } from '../../src/app';

describe('Find User by Email', () => {
  it('should be able to find a user by email', async () => {
    const response = await request(app).get('/user/byemail').send({
      email: 'test@gmail.com',
    });
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      name: 'test',
      email: 'test@gmail.com',
      cpf: '12343212',
      phone: '99999',
    });
  });

  it('should not be able to find a user', async () => {
    const response = await request(app).get('/user/byemail').send({
      email: 'wrong@gmail.com',
    });
    expect(response.status).toBe(400);
    expect(response.text).toEqual('{"message":"Email does not exist"}');
  });
});
