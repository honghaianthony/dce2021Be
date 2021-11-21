// const passport = require('passport');
const passportJWT = require('passport-jwt');
// const config = require('config').get('jwt');
const fs = require('fs');
const path = require('path');

const models = require('../models');

const pathToKey = path.join(__dirname, '..', '..', 'id_rsa_pub.pem')
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const { ExtractJwt, Strategy } = passportJWT;



module.exports = function (passport) {
    const params = {
        secretOrKey: PUB_KEY,
        algorithms: ['RS256'],
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    };
    const strategy = new Strategy(params, async (jwt_payload, done) => {
        try {
            const user = await models.User.findByPk(jwt_payload.sub);
    
            if (user) {
                return done(null, {
                    id: user.id,
                    role: user.role,
                });
            }
            return done(null, false);
        } catch (err) {
            return done(err, false);
        }
    });

    passport.use(strategy);
};
