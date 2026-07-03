const request = require('supertest');
const app = require('../../src/app');

describe('Regression Testing - GET /api/legacy-info', () => {
  test('should return legacy information with correct format', async () => {
    const response = await request(app).get('/api/legacy-info');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: "active",
      version: "v1",
      data: "legacy data"
    });
  });
});
