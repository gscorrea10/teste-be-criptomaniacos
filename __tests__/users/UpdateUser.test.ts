import request from 'supertest';

import 'reflect-metadata';
import { app } from '../../src/app';

describe('Update User', () => {
  it('should be able to update a user', async () => {
    const response = await request(app)
      .put('/user/b82f0673-b254-4bd2-afd5-69988968c102')
      .send({
        name: 'test_final',
        email: 'test@gmail.com',
        cpf: '12343212',
        phone: '99999',
      });
    console.log(response.body);
    expect(response.status).toBe(200);
  });

  it('should not be able to update a user', async () => {
    const response = await request(app).put('/user/wrongid').send({
      name: 'test_update',
      email: 'test@gmail.com',
      cpf: '12343212',
      phone: '99999',
    });
    expect(response.status).toBe(400);
    expect(response.text).toEqual('{"message":"User not found"}');
  });
});
