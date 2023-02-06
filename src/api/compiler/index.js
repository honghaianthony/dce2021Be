const express = require('express');
const router = express.Router();

const compilerController = require('./compiler.controller');
const { deleteTemp } = require('../../utilities/compilex');

router.post(
    '/',
    (req, res, next) => {
        deleteTemp();
        next();
    },
    compilerController.compile,
);

module.exports = router;
