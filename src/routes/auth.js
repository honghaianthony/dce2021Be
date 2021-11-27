const express = require("express");
const router = express.Router();
const passport = require('passport');

const authController = require("../controllers/authController");



router.post("/register", authController.register);
router.post("/login", authController.login);

router.get("/private", passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json("ok")
});


module.exports = router;