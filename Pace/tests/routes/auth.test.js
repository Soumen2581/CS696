const request = require('supertest');
const app = require('../../server');

describe('Auth API', () => {
    test('Signup should fail when required fields are missing', async () => {
        const response = await request(app)
            .post('/api/auth/signup')
            .send({});

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('error');
    });
});
