const express = require("express");
const router = express.Router();

/* GET users listing. */
const userController = require("../controllers/userController");

router.get("/get-all-users", userController.getAllUsers);
router.get("/get-user-by-id", userController.getUserById);
router.put("/update-users", userController.updateUsers);
router.get("/delete-users", userController.deleteUsers);

router.post("/create-new-user-exercise", userController.createNewUserExercise);
router.get("/get-all-user-exercise", userController.getAllUsersExercise);
router.get("/get-user-exercise-by-id", userController.getUserExerciseById);
router.put("/update-user-exercise", userController.updateUserExercise);
router.get("/delete-user-exercise", userController.deleteUserExercise);

router.post("/create-new-user-course", userController.createNewUserCourse);
router.get("/get-all-user-course", userController.getAllUsersExerciseCourse);
router.get("/get-user-course-by-id", userController.getUserCourseById);
router.put("/update-user-course", userController.updateUserCourse);
router.get("/delete-user-course", userController.deleteUserCourse);

router.post("/create-new-user-lesson", userController.createNewUserLesson);
router.get("/get-all-user-lesson", userController.getAllUsersLesson);
router.get("/get-user-lesson-by-id", userController.getUserLessonById);
router.put("/update-user-lesson", userController.updateUserLesson);
router.get("/delete-user-lesson", userController.deleteUserLesson);

module.exports = router;
