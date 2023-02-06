const request = require('supertest');
const app = require('../../../app');
const db = require('../../tests/databaseTest');

var token = null;

beforeAll(async () => {
    await db.connect();
});

afterAll(async () => {
    await db.clear();
    await db.close();
});

describe('Authentication Endpoints', () => {
    it('should create a user', async () => {
        const res = await request(app)
            .post('/api/v1/register')
            .send({ userName: 'string', password: 'string' });
        token = res.body.token;

        expect(res.statusCode).toEqual(201);
    });
    it('should login', async () => {
        const res = await request(app)
            .post('/api/v1/login')
            .send({ userName: 'string', password: 'string' })
            .set('Authorization', 'Bearer ' + token);

        expect(res.statusCode).toEqual(200);
    });
});
