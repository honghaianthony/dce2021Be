const express = require("express");
const router = express.Router();

/* GET users listing. */
const exerciseController = require("../controllers/exerciseController");

router.post("/create-new-exercise", exerciseController.createNewExercise);
router.get("/get-all-exercises", exerciseController.getAllExercises);
router.get("/get-exercises-by-id", exerciseController.getExercisesById);
router.put("/update-exercises", exerciseController.updateExercises);
router.get("/delete-exercises", exerciseController.deleteExercises);
router.post("/confirm-do-exercise", exerciseController.confirmDoExercise);

module.exports = router;
