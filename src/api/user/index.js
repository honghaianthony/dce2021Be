const express = require('express');
const passport = require('passport');
const router = express.Router();
const { checkPermissionAdmin } = require('../../auth/checkPermission');
const { checkDoneUserLesson } = require('./user.controller');

const userController = require('./user.controller');

router.get(
    '/get-all-users',
    passport.authenticate('jwt', { session: false }),
    checkPermissionAdmin,
    userController.getAllUsers,
);
router.get(
    '/get-user-by-id',
    passport.authenticate('jwt', { session: false }),
    checkPermissionAdmin,
    userController.getUserById,
);
router.put(
    '/update-users-role',
    passport.authenticate('jwt', { session: false }),
    checkPermissionAdmin,
    userController.updateRole,
);
router.get(
    '/get-user-course-by-id',
    passport.authenticate('jwt', { session: false }),
    userController.getUserCourseByCourseId,
);
router.get(
    '/get-user-lesson-by-id',
    passport.authenticate('jwt', { session: false }),
    userController.getUserLessonByLessonId,
);
router.post(
    '/create-new-user-lesson',
    passport.authenticate('jwt', { session: false }),
    userController.registerLesson,
);
router.post(
    '/create-new-user-exercise',
    passport.authenticate('jwt', { session: false }),
    userController.registerExercise,
);
router.post(
    '/create-new-user-course',
    passport.authenticate('jwt', { session: false }),
    userController.createUserCourse,
);
router.put(
    '/update-user-lesson',
    passport.authenticate('jwt', { session: false }),
    userController.doneLesson,
);
router.put(
    '/update-user-course',
    passport.authenticate('jwt', { session: false }),
    userController.doneCourse,
);
router.get(
    '/check-course-done',
    passport.authenticate('jwt', { session: false }),
    userController.checkDoneCourse,
);
router.get(
    '/check-userLesson-done',
    passport.authenticate('jwt', { session: false }),
    userController.checkDoneUserLesson,
);
router.get(
    '/check-completed-userLesson-by-lessonId',
    passport.authenticate('jwt', { session: false }),
    userController.getCompletedUserLessonByLessonId,
);
router.get(
    '/me',
    passport.authenticate('jwt', { session: false }),
    userController.getMe,
);
router.get(
    '/get-all-user-course',
    passport.authenticate('jwt', { session: false }),
    userController.getAllUserCourse,
);
router.get(
    '/get-all-user-exercise',
    passport.authenticate('jwt', { session: false }),
    userController.getAllUserExercise,
);
router.put(
    '/update',
    passport.authenticate('jwt', { session: false }),
    userController.updateUserInfo,
);

module.exports = router;
