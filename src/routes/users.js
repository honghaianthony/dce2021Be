const express = require("express");
const router = express.Router();

/* GET users listing. */
const userController = require("../controllers/userController");

router.get("/get-all-users", userController.getAllUsers);
router.put("/update-users", userController.updateUsers);
router.get("/delete-users", userController.deleteUsers);

module.exports = router;
