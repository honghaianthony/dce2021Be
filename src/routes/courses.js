const express = require("express");
const router = express.Router();

/* GET users listing. */
const courseController = require("../controllers/courseController");

router.post("/create-new-courses", courseController.createNewCourses);
router.get("/get-courses", courseController.getCourses);
router.put("/update-courses", courseController.updateCourses);
router.get("/delete-courses", courseController.deleteCourses);

module.exports = router;
