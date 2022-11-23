import request from 'supertest';

import 'reflect-metadata';
import { app } from '../../src/app';

describe('Get All Users', () => {
  it('should be able to list all users', async () => {
    const response = await request(app).get('/user');
    console.log(response);
    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('email');
  });
});
