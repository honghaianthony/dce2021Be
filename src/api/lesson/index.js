const express = require('express');
const router = express.Router();

const passport = require('passport');
const { checkPermissionAdmin } = require('../../auth/checkPermission');

const lessonController = require('./lesson.controller');

router.get('/get-all-lessons', lessonController.getAllLesson);
router.post(
    '/create-new-lesson',
    passport.authenticate('jwt', { session: false }),
    checkPermissionAdmin,
    lessonController.createLesson,
);
router.get('/get-lesson-by-id', lessonController.getLessonById);
router.delete(
    '/delete-lessons',
    passport.authenticate('jwt', { session: false }),
    checkPermissionAdmin,
    lessonController.deleteLessonById,
);
router.post(
    '/create-new-lesson-test',
    passport.authenticate('jwt', { session: false }),
    checkPermissionAdmin,
    lessonController.createLessonTest,
);
router.put(
    '/update-note',
    passport.authenticate('jwt', { session: false }),
    lessonController.updateNote,
);
router.put(
    '/update-lessons',
    passport.authenticate('jwt', { session: false }),
    checkPermissionAdmin,
    lessonController.updateLessonById,
);
router.put(
    '/update-lessons-test',
    passport.authenticate('jwt', { session: false }),
    checkPermissionAdmin,
    lessonController.updateLessonTestById,
);
router.get('/get-all-lessons-test', lessonController.getAllLessonTestById);
router.get('/get-all-lessons-comment', lessonController.getAllLessonComment);
router.get(
    '/get-note-by-id',
    passport.authenticate('jwt', { session: false }),
    lessonController.getLessonNote,
);
module.exports = router;
