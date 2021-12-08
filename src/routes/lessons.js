const express = require("express");
const router = express.Router();

/* GET users listing. */
const lessonController = require("../controllers/lessonController");

router.post("/create-new-lesson", lessonController.createNewLesson);
router.get("/get-all-lessons", lessonController.getAllLessons);
router.get("/get-lesson-by-id", lessonController.getLessonsById);
router.put("/update-lessons", lessonController.updateLessons);
router.get("/delete-lessons", lessonController.deleteLessons);

module.exports = router;
