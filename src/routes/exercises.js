const express = require("express");
const router = express.Router();

/* GET users listing. */
const exerciseController = require("../controllers/exerciseController");

router.post("/create-new-exercise", exerciseController.createNewExercise);
router.get("/get-exercises", exerciseController.getExercises);
router.put("/update-exercises", exerciseController.updateExercises);
router.get("/delete-exercises", exerciseController.deleteExercises);

module.exports = router;
