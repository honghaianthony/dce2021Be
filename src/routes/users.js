const express = require("express");
const router = express.Router();

/* GET users listing. */
const userController = require("../controllers/userController");

router.get("/get-all-users", userController.getAllUsers);
router.get("/get-user-by-id", userController.getUserById);
router.put("/update-users", userController.updateUsers);
router.get("/delete-users", userController.deleteUsers);

router.post("/create-new-user-exercise", userController.createNewUserExercise);
router.get("/get-all-comments", userController.getAllComments);
router.get("/get-comment-by-id", userController.getCommentById);
router.put("/update-comment", userController.updateUserExercise);
router.get("/delete-comment", userController.deleteUserExercise);

module.exports = router;
