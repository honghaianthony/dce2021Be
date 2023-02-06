const momoService = require('./momo.service');

module.exports = {
    createPayment: async function (req, res, next) {
        try {
            const payment = await momoService.createPayment2(req.body.amount);
            res.status(200).json(payment);
        } catch (error) {
            next(error);
        }
    },
};
