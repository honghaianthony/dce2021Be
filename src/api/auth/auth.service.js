const util = require('../../utilities/jwt');
const model = require('../../models');
const nodemailer = require('nodemailer');
var handlebars = require('handlebars');
var fs = require('fs');
const { google } = require('googleapis');

const CLIENT_ID = process.env.CLIENT_ID;
const CLEINT_SECRET = process.env.CLEINT_SECRET;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLEINT_SECRET,
    REDIRECT_URI,
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

function makeRandomPassword() {
    var result = '';
    var characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = 6;
    for (var i = 0; i < 6; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength),
        );
    }
    return result;
}

const readHTMLFile = function (path, callback) {
    console.log(path);
    fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
        if (err) {
            callback(err);
            throw err;
        } else {
            callback(null, html);
        }
    });
};

module.exports = {
    register: async function (req) {
        try {
            const hashedPassword = await util.genPasswordAsync(
                req.body.password,
            );
            const user = await model.User.create({
                userName: req.body.userName,
                password: hashedPassword,
                email: req.body.email,
                phone: req.body.phone,
                role: 1,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                dateOfBirth: req.body.dateOfBirth,
            });
            const jwt = util.issueJWT(user);
            return {
                message: 'Success',
                token: jwt.token,
                expires: jwt.expires,
            };
        } catch (error) {
            console.log(error);
        }
    },
    login: async function (req) {
        const { userName, password } = req.body;
        const user = await model.User.findOne({
            userName: userName,
        });

        if (user) {
            const valid = await util.validPasswordAsync(
                password,
                user.password,
            );
            if (valid) {
                const jwt = util.issueJWT(user);

                return {
                    message: 'Success',
                    success: true,
                    token: jwt.token,
                    expiredIn: jwt.expires,
                };
            } else {
                return { message: 'Wrong password', success: false };
            }
        }
        return { message: 'User not exists', success: false };
    },
    updatePassword: async function (req) {
        const { oldPass, newPass, confirmNP } = req.body;
        if (newPass !== confirmNP) {
            return {
                errCode: 1,
            };
        }
        const userId = req.user.id;
        const user = await model.User.findOne({
            _id: userId,
        });
        if (user) {
            const valid = await util.validPasswordAsync(oldPass, user.password);
            if (!valid)
                return {
                    errCode: 2,
                };
            else {
                try {
                    const hashedPassword = await util.genPasswordAsync(newPass);
                    user.password = hashedPassword;
                    await user.save();
                    return {
                        errCode: 0,
                    };
                } catch (error) {
                    console.log(error);
                }
            }
        }
    },
    recoverPassword: async function (req) {
        const { email, userName } = req.body;
        const user = await model.User.findOne({ email, userName });

        if (user) {
            var newPassword = makeRandomPassword();
            const hashedPassword = await util.genPasswordAsync(newPassword);

            const accessToken = await oAuth2Client.getAccessToken();

            var transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    type: 'OAuth2',
                    user: 'dceuit2021',
                    clientId: CLIENT_ID,
                    clientSecret: CLEINT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken,
                },
            });
            readHTMLFile(
                __dirname + '/template.html',
                async function (err, html) {
                    var replacements = {
                        name: user.firstName,
                        pass: newPassword,
                    };
                    var template = handlebars.compile(html);
                    var htmlToSend = template(replacements);
                    var mainOptions = {
                        from: 'DCE 2021<dceuit2021@gmail.com>',
                        to: email,
                        subject: 'Recover password - DCE',
                        text: '',
                        html: htmlToSend,
                    };
                    await transporter.sendMail(mainOptions);
                },
            );
            await model.User.updateOne(
                { userName, email },
                { $set: { password: hashedPassword } },
            );

            return {
                message: 'Sent recover password to your email',
                success: true,
            };
        } else {
            return { message: 'User or email not exists', success: false };
        }
    },
};
