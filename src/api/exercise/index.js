const express = require('express');
const router = express.Router();
const passport = require('passport');

const exerciseController = require('./exercise.controller');

router.get('/get-all-exercises', exerciseController.getAllExercise);
router.get('/get-exercises-by-id', exerciseController.getAllExerciseById);
router.post(
    '/confirm-do-exercise',
    passport.authenticate('jwt', { session: false }),
    exerciseController.confirmExercise,
);
router.post(
    '/create-new-exercise',
    passport.authenticate('jwt', { session: false }),
    exerciseController.createExercise,
);
router.get('/get-exercises-test-by-id', exerciseController.getTestCaseById);
router.get('/get-all-exercises-test', exerciseController.getAllTestCase);
router.get(
    '/get-all-exercises-test-by-exerciseId',
    exerciseController.getTestCaseByExerciseId,
);
router.post(
    '/create-new-exercise-test',
    passport.authenticate('jwt', { session: false }),
    exerciseController.createTestCase,
);
router.put(
    '/update-exercises',
    passport.authenticate('jwt', { session: false }),
    exerciseController.updateExercise,
);
router.put(
    '/update-exercises-test',
    passport.authenticate('jwt', { session: false }),
    exerciseController.updateTestCase,
);
router.delete(
    '/delete-exercises-test',
    passport.authenticate('jwt', { session: false }),
    exerciseController.deleteExerciseTest,
);
router.delete(
    '/delete-exercises',
    passport.authenticate('jwt', { session: false }),
    exerciseController.deleteExercise,
);
module.exports = router;
