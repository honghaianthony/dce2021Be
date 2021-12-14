const express = require("express");
const router = express.Router();
const passport = require("passport");

/* GET users listing. */
const userController = require("../controllers/userController");

router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  userController.getMe
);
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
router.get(
  "/get-all-user-exercise",
  passport.authenticate("jwt", { session: false }),
  userController.getAllUsersExercise
);
router.get("/get-user-exercise-by-id", userController.getUserExerciseById);
router.put(
  "/update-user-exercise",
  passport.authenticate("jwt", { session: false }),
  userController.updateUserExercise
);
router.delete(
  "/delete-user-exercise",
  passport.authenticate("jwt", { session: false }),
  userController.deleteUserExercise
);

router.post(
  "/create-new-user-course",
  passport.authenticate("jwt", { session: false }),
  userController.createNewUserCourse
);
router.get(
  "/get-all-user-course",
  passport.authenticate("jwt", { session: false }),
  userController.getAllUsersExerciseCourse
);
router.get(
  "/get-user-course-by-id",
  passport.authenticate("jwt", { session: false }),
  userController.getUserCourseById
);
router.put(
  "/update-user-course",
  passport.authenticate("jwt", { session: false }),
  userController.updateUserCourse
);
router.delete(
  "/delete-user-course",
  passport.authenticate("jwt", { session: false }),
  userController.deleteUserCourse
);

router.post(
  "/create-new-user-lesson",
  passport.authenticate("jwt", { session: false }),
  userController.createNewUserLesson
);
router.get("/get-all-user-lesson", userController.getAllUsersLesson);
router.get(
  "/get-user-lesson-by-id",
  passport.authenticate("jwt", { session: false }),
  userController.getUserLessonById
);
router.put(
  "/update-user-lesson",
  passport.authenticate("jwt", { session: false }),
  userController.updateUserLesson
);
router.delete(
  "/delete-user-lesson",
  passport.authenticate("jwt", { session: false }),
  userController.deleteUserLesson
);
router.get(
  "/check-course-done",
  passport.authenticate("jwt", { session: false }),
  userController.checkCourseDone
);

module.exports = router;
