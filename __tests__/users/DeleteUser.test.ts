import request from 'supertest';

import 'reflect-metadata';
import { app } from '../../src/app';

describe('Delete User', () => {
  it('should be able to delete a user', async () => {
    const response = await request(app).delete(
      '/user/d267f81a-003b-4d3e-b26e-9a63a3415af1',
    );
    expect(response.status).toBe(204);
  });

  it('should not be able to delete a user', async () => {
    const response = await request(app).delete(
      '/user/d267f81a-003b-4d3e-b26e-9a63a3415af1',
    );
    expect(response.status).toBe(400);
    expect(response.text).toEqual(
      '{"error":{"message":"User does not exist","statusCode":400}}',
    );
  });
});
