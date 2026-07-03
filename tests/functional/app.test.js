const request = require('supertest');
const app = require('../../src/app');

describe('Functional Testing - GET /api/add', () => {
  test('should add two positive numbers correctly', async () => {
    const response = await request(app).get('/api/add?a=5&b=3');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ result: 8 });
  });

  test('should add negative numbers correctly', async () => {
    const response = await request(app).get('/api/add?a=-5&b=-3');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ result: -8 });
  });

  test('should return 400 if parameters are missing', async () => {
    const response = await request(app).get('/api/add?a=5');
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Parameters a and b are required');
  });

  test('should return 400 if parameters are not numbers', async () => {
    const response = await request(app).get('/api/add?a=abc&b=3');
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Parameters a and b must be valid numbers');
  });
});
