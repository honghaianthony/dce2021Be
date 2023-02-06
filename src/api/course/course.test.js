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

describe('Course Endpoints', () => {
    it('should create a new course', async () => {
        const res = await request(app)
            .post('/api/v1/course/create-new-course')
            .set('Authorization', 'Bearer ' + token)
            .send({
                courseName: 'test',
                description: 'test',
                time: 10,
            });
        expect(res.statusCode).toEqual(200);
    });
});
