const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');

const db = require('./src/models/index');

const YAML = require('yamljs');
const swaggerDocs = YAML.load('./docs/swagger.yml');

const indexRouter = require('./src/routes/index');
// const usersRouter = require('./src/routes/users');

// Configures and sync models to the database
db.sequelize.sync();

const app = express();

app.use(cors({
    origin: 'https://localhost:3001'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;
