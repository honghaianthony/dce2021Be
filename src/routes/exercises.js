const express = require("express");
const router = express.Router();
const passport = require("passport");

/* GET users listing. */
const exerciseController = require("../controllers/exerciseController");

router.post(
    "/create-new-exercise",
    passport.authenticate("jwt", { session: false }),
    exerciseController.createNewExercise
);
router.get("/get-all-exercises", exerciseController.getAllExercises);
router.get("/get-exercises-by-id", exerciseController.getExercisesById);
router.put("/update-exercises", exerciseController.updateExercises);
router.get("/delete-exercises", exerciseController.deleteExercises);
router.post("/confirm-do-exercise", exerciseController.confirmDoExercise);

router.post(
    "/create-new-exercise-test",
    exerciseController.createNewExerciseTest
);
router.get("/get-all-exercises-test", exerciseController.getAllExercisesTest);
router.get(
    "/get-exercises-test-by-id",
    exerciseController.getExercisesTestById
);
router.put("/update-exercises-test", exerciseController.updateExercisesTest);
router.get("/delete-exercises-test", exerciseController.deleteExercisesTest);

module.exports = router;
