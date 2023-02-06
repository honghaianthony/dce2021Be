const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const exerciseRouter = require('./exercise');
const authRouter = require('./auth');
const blogRouter = require('./blog');
const compilerRouter = require('./compiler');

const loginWithGoogleRouter = require('./auth/loginWithGoogle');
const lessonRoute = require('./lesson');
const momoRoute = require('./momo');

const courseRouter = require('./course');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.use('/user', userRouter);
router.use('/blog', blogRouter);
router.use('/exercises', exerciseRouter);
router.use(authRouter);
router.use(loginWithGoogleRouter);
router.use('/lessons', lessonRoute);
router.use('/compiler', compilerRouter);
router.use('/momo', momoRoute);

router.use('/course', courseRouter);
module.exports = router;
