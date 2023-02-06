const request = require('supertest');
const app = require('../../../app');
const db = require('../../tests/databaseTest');
const model = require('../../models');

var token = null;

beforeAll(async () => {
    await db.connect();
    const res = await request(app)
        .post('/api/v1/register')
        .send({ userName: 'string', password: 'string' });
    await model.User.updateOne({ userName: 'string' }, { role: 2 });
    token = res.body.token;
});
afterEach(async () => await db.clear());
afterAll(async () => await db.close());

describe('Exercises Endpoints', () => {
    it('should create a new exercise', async () => {
        const res = await request(app)
            .post('/api/v1/exercises/create-new-exercise')
            .set('Authorization', 'Bearer ' + token)
            .send({
                exerciseName: 'string',
                content: 'string',
                level: 2,
            });
        expect(res.statusCode).toEqual(200);
    });
});
