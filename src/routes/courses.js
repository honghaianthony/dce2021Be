const express = require("express");
const router = express.Router();

/* GET users listing. */
const courseController = require("../controllers/courseController");

router.post("/create-new-courses", courseController.createNewCourses);
router.get("/get-all-courses", courseController.getAllCourses);
router.get("/get-course-by-id", courseController.getCourseById);
router.put("/update-courses", courseController.updateCourses);
router.get("/delete-courses", courseController.deleteCourses);

module.exports = router;
