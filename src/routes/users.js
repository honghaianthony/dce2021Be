const express = require("express");
const router = express.Router();

/* GET users listing. */
const userController = require("../controllers/userController");

router.get("/get-users", userController.getUsers);
router.put("/update-users", userController.updateUsers);
router.get("/delete-users", userController.deleteUsers);

router.post("/create-new-user-exercise", userController.createNewUserExercise);
router.get("/get-comment", userController.getUserExercise);
router.put("/update-comment", userController.updateUserExercise);
router.get("/delete-comment", userController.deleteUserExercise);

module.exports = router;
