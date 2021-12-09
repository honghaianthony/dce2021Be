const express = require("express");
const router = express.Router();

const compilerController = require("../controllers/compilerController");
const { deleteTemp } = require("../util/compilex");

router.post(
  "/",
  (req, res, next) => {
    deleteTemp();
    next();
  },
  compilerController.compile
);

module.exports = router;
