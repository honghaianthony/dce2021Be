const express = require("express");
const router = express.Router();

/* GET users listing. */
const lessonController = require("../controllers/lessonController");

router.post("/create-new-lesson", lessonController.createNewLesson);
router.get("/get-lessons", lessonController.getLessons);
router.put("/update-lessons", lessonController.updateLessons);
router.get("/delete-lessons", lessonController.deleteLessons);

module.exports = router;
