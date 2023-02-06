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

describe('User Endpoints', () => {
    it('should create a new user lesson', async () => {
        const course = await model.Course.create({
            courseName: 'test',
            description: 'test',
            time: 10,
        });
        const lesson = await model.Lesson.create({
            courseId: course._id,
            lessonName: 'test',
            content: 'test',
            description: 'test',
        });
        const res = await request(app)
            .post('/api/v1/user/create-new-user-lesson')
            .set('Authorization', 'Bearer ' + token)
            .send({
                lessonId: lesson._id,
            });
        expect(res.statusCode).toEqual(200);
    });
});
