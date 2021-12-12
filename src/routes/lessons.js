const express = require("express");
const router = express.Router();

/* GET users listing. */
const lessonController = require("../controllers/lessonController");

router.post("/create-new-lesson", lessonController.createNewLesson);
router.get("/get-all-lessons", lessonController.getAllLessons);
router.get("/get-lesson-by-id", lessonController.getLessonsById);
router.put("/update-lessons", lessonController.updateLessons);
router.get("/delete-lessons", lessonController.deleteLessons);

router.get(
    "/get-all-lessons-by-courseId",
    lessonController.getAllLessonsByCourseId
);

router.post(
    "/create-new-lesson-comment",
    lessonController.createNewLessonComment
);
router.get("/get-all-lessons-comment", lessonController.getAllLessonsComment);
router.get("/get-lesson-comment-by-id", lessonController.getLessonsByIdComment);
router.put("/update-lessons-comment", lessonController.updateLessonsComment);
router.delete("/delete-lessons-comment", lessonController.deleteLessonsComment);

module.exports = router;
