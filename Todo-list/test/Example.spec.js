import supertest from 'supertest';
import app from '../src/app.js';

const testClient = supertest(app);

describe('testExample', () => {
  test('hello-world', async () => {
    const res = await testClient.get('/hello/test');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hi, test');
  });
});
