const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const passport = require("passport");

const initializePassport = require("./src/auth/passport");

const db = require("./src/models/index");

const YAML = require("yamljs");
// const swaggerDocs = YAML.load("./docs/swagger.yml");
const swaggerDocs = require("./docs/swagger.json");

const indexRouter = require("./src/routes/index");

// Configures and sync models to the database
db.sequelize.sync();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.use(
  logger(":method :url :status :remote-addr - :remote-user [:date[iso]]")
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "src/public")));

// Auth
initializePassport(passport);
app.use(passport.initialize());

app.use("/api", indexRouter);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;
