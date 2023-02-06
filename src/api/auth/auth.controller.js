const authService = require('./auth.service');

module.exports = {
    register: async function (req, res, next) {
        try {
            const user = await authService.register(req);

            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    },
    login: async function (req, res, next) {
        try {
            const result = await authService.login(req);
            if (result.success == true) {
                res.status(200).json(result);
            } else {
                res.status(401).json(result);
            }
        } catch (error) {
            next(error);
        }
    },
    recoverPassword: async function (req, res) {
        try {
            const result = await authService.recoverPassword(req);
            if (result.success == true) {
                res.status(200).json(result);
            } else {
                res.status(200).json(result);
            }
        } catch (error) {}
    },
    updatePassword: async function (req, res) {
        try {
            const result = await authService.updatePassword(req);
            res.status(200).json(result);
        } catch (error) {}
    },
};
