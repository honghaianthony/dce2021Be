const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const pathToKey = path.join(__dirname, '..', '..', 'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');

async function validPasswordAsync(password, hashedPassword) {
    const valid = await bcrypt.compare(password, hashedPassword);
    return valid;
}

async function genPasswordAsync(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
}

function issueJWT(user) {
    const id = user.id;

    const expiresIn = '3d';

    const fullname = `${user.lastName} ${user.firstName}`;

    const payload = {
        sub: id,
        userId: id,
        role: user.role,
        username: user.userName,
        fullname: fullname,
        // iat: Date.now()
    };

    const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
        expiresIn: expiresIn,
        algorithm: 'RS256',
    });

    return {
        token: signedToken,
        expires: expiresIn,
    };
}

module.exports = { issueJWT, genPasswordAsync, validPasswordAsync };
