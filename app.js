const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const initializePassport = require('./src/auth/passport');

const swaggerDocs = require('./docs/swagger.json');

const db = require('./config/db');

const indexRouter = require('./src/api');

const app = express();

db.connectDB();

app.use(
    session({
        secret: 'secretcode',
        resave: true,
        saveUninitialized: true,
    }),
);

app.use(
    cors({
        origin: [
            'http://localhost:3001',
            'https://dce2021.vercel.app',
            'https://dce2021.netlify.app',
            'https://dce2021.ml',
        ],
    }),
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1', indexRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json('Something broke!');
});

app.use('*', (req, res) => {
    res.status(404).json({ error: 'not found' });
});

module.exports = app;
