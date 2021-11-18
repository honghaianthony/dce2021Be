const bcrypt = require('bcrypt');
const models = require('../models');

module.exports = {
    register: async function (req) {
        const salt = 10; 

        try {
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            await models.User.create({
                username: req.body.username,
                password: hashedPassword,
                email: req.body.email,
                phone: req.body.phone,
                role: 1,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                dateOfBirth: req.body.dateOfBirth,
            });
        } catch (error) {
            
        }
    },
}