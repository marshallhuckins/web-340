const http = require('http');
const server = require('../src/server');

// TODO: Implement your tests here

describe('Server Tests', () => {
  beforeAll((done) => {
    server.listen(3000, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  test('Valid conversion request', (done) => {
    http.get('http://localhost:3000/convert?pounds=10', (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        const response = JSON.parse(data);
        expect(res.statusCode).toBe(200);
        expect(response).toEqual({ pounds: 10, kilograms: '4.54' });
        done();
      });
    });
  });

  test('Invalid pounds parameter', (done) => {
    http.get('http://localhost:3000/convert?pounds=abc', (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        const response = JSON.parse(data);
        expect(res.statusCode).toBe(400);
        expect(response).toEqual({ error: 'Invalid or missing pounds parameter' });
        done();
      });
    });
  });

  test('Route not found', (done) => {
    http.get('http://localhost:3000/invalid-route', (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        const response = JSON.parse(data);
        expect(res.statusCode).toBe(404);
        expect(response).toEqual({ error: 'Route not found' });
        done();
      });
    });
  });
});