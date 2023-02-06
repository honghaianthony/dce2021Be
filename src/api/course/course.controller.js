const courseService = require('./course.service');

module.exports = {
    getAllCourses: async function (req, res, next) {
        try {
            const courses = await courseService.getAllCourses();
            res.json(courses);
        } catch (error) {
            console.log(error);
        }
    },

    getCourseById: async function (req, res, next) {
        try {
            const courses = await courseService.getCourseById(req.query.id);
            res.json(courses);
        } catch (error) {
            console.log(error);
        }
    },

    createCourse: async function (req, res, next) {
        try {
            const course = await courseService.createCourse(req);
            res.status(200).json(course);
        } catch (error) {
            console.log(error);
        }
    },

    deleteCourseById: async function (req, res, next) {
        try {
            const course = await courseService.deleteCourseById(req);
            res.status(200).json(course);
        } catch (error) {
            console.log(error);
        }
    },

    updateCourseById: async function (req, res, next) {
        try {
            const course = await courseService.updateCourseById(req);
            res.status(200).json(course);
        } catch (error) {
            console.log(error);
        }
    },
};
