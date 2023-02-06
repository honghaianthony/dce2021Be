const express = require('express');
const router = express.Router();
const courseController = require('./course.controller');
const passport = require('passport');
/* GET users listing. */
router.get('/get-all-courses', courseController.getAllCourses);
router.get('/get-course-by-id', courseController.getCourseById);
router.post(
    '/create-new-course',
    passport.authenticate('jwt', { session: false }),
    courseController.createCourse,
);
router.delete(
    '/delete-course',
    passport.authenticate('jwt', { session: false }),
    courseController.deleteCourseById,
);
router.put(
    '/update-course',
    passport.authenticate('jwt', { session: false }),
    courseController.updateCourseById,
);
module.exports = router;
