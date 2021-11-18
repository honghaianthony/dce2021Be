const authService = require('../services/authService');

module.exports = {
    register: async function (req, res, next) {
        try {
            await authService.register(req);

            res.status(201).json('ok');
        } catch (error) {
            next(error);
        }
    },
}