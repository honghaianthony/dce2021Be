const express = require("express");
const router = express.Router();

const userRouter = require("./users");
const courseRouter = require("./courses");
const exerciseRouter = require("./exercises");
const lessonRouter = require("./lessons");
const authRouter = require("./auth");
const blogRouter = require("./blogs");
const uploadRouter = require("./upload");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.send("Hello");
});

router.use(authRouter);
router.use("/users", userRouter);
router.use("/courses", courseRouter);
router.use("/exercises", exerciseRouter);
router.use("/lessons", lessonRouter);
router.use("/upload", uploadRouter);
router.use("/blog", blogRouter);

module.exports = router;
