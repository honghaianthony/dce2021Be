const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');

const YAML = require('yamljs');
const swaggerDocs = YAML.load('./docs/swagger.yml');

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');

const app = express();

// app.use(cors({
//     origin: 'https://localhost:3000'
// }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/users', usersRouter);

module.exports = app;
