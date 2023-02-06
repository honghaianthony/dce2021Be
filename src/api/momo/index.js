const express = require('express');
const router = express.Router();

const momoController = require('./momo.controller');

router.post('/', momoController.createPayment);

module.exports = router;
