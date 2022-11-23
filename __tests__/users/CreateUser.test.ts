import request from 'supertest';

import 'reflect-metadata';
import { app } from '../../src/app';

describe('Create User', () => {
  it('should be able to create a new user', async () => {
    const response = await request(app).post('/user').send({
      name: 'test',
      email: 'test@gmail.com',
      cpf: '12343212',
      phone: '99999',
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to create a new user', async () => {
    const response = await request(app).post('/user').send({
      name: 'test',
      email: 'test@gmail.com',
      cpf: '12343212',
      phone: '99999',
    });
    expect(response.status).toBe(500);
  });
});
