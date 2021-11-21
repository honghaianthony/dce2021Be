const models = require('../models');
const util = require('../util/jwt');

module.exports = {
    register: async function (req) {
        try {
            const hashedPassword = await util.genPasswordAsync(req.body.password);
            const user = await models.User.create({
                username: req.body.username,
                password: hashedPassword,
                email: req.body.email,
                phone: req.body.phone,
                role: 1,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                dateOfBirth: req.body.dateOfBirth,
            });
            const jwt = util.issueJWT(user);
            return ({
                message: "Success",
                token: jwt.token,
                expires: jwt.expires,
            })
        } catch (error) {
            console.log(error)
        }
    },
    login: async function (req) {
        const {username, password} = req.body;
        const user = await models.User.findOne({
            where: {
                username,
            }
        });

        if (user) {
            const valid = await util.validPasswordAsync(password, user.password);
            if (valid) {
                const jwt = util.issueJWT(user);

                return {
                  message: "Success",
                  success: true,
                  token: jwt.token,
                  expiredIn: jwt.expires,
                };
            } else {
                return { message: "Wrong password", success: false, };
            }
        } 
        return { message: "User not exists", success: false, };
    },
}