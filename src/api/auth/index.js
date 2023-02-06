const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('./auth.controller');

router.post('/login', authController.login);
router.post('/register', authController.register);

router.get(
    '/private',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        console.log(req.user);

        res.json('ok');
    },
);

router.post(
    '/update-password',
    passport.authenticate('jwt', { session: false }),
    authController.updatePassword,
);

router.get('/demo-query', (req, res) => {
    console.log(req.query);
    const { id, title } = req.query;
    res.end();
});

router.get('/param/:id', (req, res) => {
    console.log(req.params.id);
    res.end();
});

router.post('/body', (req, res) => {
    console.log(req.body);
    const { name, age } = req.body;
    res.end();
});
router.post('/forgot_password', authController.recoverPassword);

module.exports = router;
