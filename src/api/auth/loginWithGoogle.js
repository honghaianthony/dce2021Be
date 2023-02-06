const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const models = require('../../models');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const util = require('../../utilities/jwt');

router.post('/auth/google', async (req, res) => {
    const { tokenId } = req.body;

    const ticket = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { name, email, email_verified, family_name, given_name } =
        ticket.getPayload();
    if (email_verified) {
        await models.User.findOne({ email }).exec((err, user) => {
            if (err) {
                return res.status(400).json({
                    error: 'Something went wrong...',
                });
            } else {
                if (user) {
                    const jwt = util.issueJWT(user);
                    console.log(jwt);
                    const { _id, name, email } = user;
                    return res.status(200).json({
                        message: 'Success',
                        success: true,
                        token: jwt.token,
                        expires: jwt.expires,
                        user: {
                            _id,
                            name,
                            email,
                            firstName: given_name,
                            lastName: family_name,
                        },
                    });
                } else {
                    let newUser = new models.User({
                        name,
                        email,
                        userName: email,
                        firstName: given_name,
                        lastName: family_name,
                        role: 1,
                    });
                    newUser.save((err, data) => {
                        if (err) {
                            return res.status(400).json({
                                error: 'Something went wrong...',
                            });
                        }
                        const jwt = util.issueJWT(data);
                        console.log(jwt);
                        const { _id, name, email } = data;

                        return res.status(200).json({
                            message: 'Success',
                            success: true,
                            token: jwt.token,
                            expires: jwt.expires,
                            user: {
                                _id,
                                name,
                                email,
                                firstName: given_name,
                                lastName: family_name,
                            },
                        });
                    });
                }
            }
        });
    }
});

module.exports = router;
