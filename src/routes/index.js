const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

const userRouter = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.send("Hello");
});

router.post("/register", authController.register);

router.use("/users", userRouter);

module.exports = router;
