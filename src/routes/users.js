const express = require("express");
const router = express.Router();
const passport = require("passport");

/* GET users listing. */
const userController = require("../controllers/userController");

router.get(
  "/get-all-users",
  passport.authenticate("jwt", { session: false }),
  userController.getAllUsers
);
router.get(
  "/get-user-by-id",
  passport.authenticate("jwt", { session: false }),
  userController.getUserById
);
router.put(
  "/update-users",
  passport.authenticate("jwt", { session: false }),
  userController.updateUsers
);
router.put(
  "/update-users-role",
  passport.authenticate("jwt", { session: false }),
  userController.updateRole
);
router.delete(
  "/delete-users",
  passport.authenticate("jwt", { session: false }),
  userController.deleteUsers
);

router.post(
  "/create-new-user-exercise",
  passport.authenticate("jwt", { session: false }),
  userController.createNewUserExercise
);
router.get("/get-all-user-exercise", userController.getAllUsersExercise);
router.get("/get-user-exercise-by-id", userController.getUserExerciseById);
router.put("/update-user-exercise", userController.updateUserExercise);
router.delete("/delete-user-exercise", userController.deleteUserExercise);

router.post(
  "/create-new-user-course",
  passport.authenticate("jwt", { session: false }),
  userController.createNewUserCourse
);
router.get("/get-all-user-course", userController.getAllUsersExerciseCourse);
router.get(
  "/get-user-course-by-id",
  passport.authenticate("jwt", { session: false }),
  userController.getUserCourseById
);
router.put("/update-user-course", userController.updateUserCourse);
router.delete("/delete-user-course", userController.deleteUserCourse);

router.post(
  "/create-new-user-lesson",
  passport.authenticate("jwt", { session: false }),
  userController.createNewUserLesson
);
router.get("/get-all-user-lesson", userController.getAllUsersLesson);
router.get("/get-user-lesson-by-id", userController.getUserLessonById);
router.put("/update-user-lesson", userController.updateUserLesson);
router.delete("/delete-user-lesson", userController.deleteUserLesson);

module.exports = router;
