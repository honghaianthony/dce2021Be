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

describe('Blogs Endpoints', () => {
    it('should create a new blog', async () => {
        const user = await model.User.find();
        const res = await request(app)
            .post('/api/v1/blog/create-new-blog')
            .set('Authorization', 'Bearer ' + token)
            .send({
                user: user,
                title: 'blog test',
                content: 'blog content test',
                coverImage: 'blog cover image test',
                blogImage: 'blog image test',
            });
        expect(res.statusCode).toEqual(200);
    });
});
