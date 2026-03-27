const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Task Manager API', () => {
  it('Health check', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});