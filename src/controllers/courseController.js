const courseService = require("../services/courseService");

module.exports = {
    createNewCourses: async function (req, res) {
        try {
            let courses = await courseService.createNewCourses(req.body);
            return res.status(200).json(courses);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "This Course has already existed",
            });
        }
    },
    getAllCourses: async function (req, res) {
        try {
            let courses = await courseService.getAllCourses();
            return res.status(200).json(courses);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getCourseById: async function (req, res) {
        try {
            let courses = await courseService.getCourseById(req.query.id);
            return res.status(200).json(courses);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    updateCourses: async function (req, res) {
        try {
            let courses = await courseService.updateCourses(req.body);
            return res.status(200).json(courses);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    deleteCourses: async function (req, res) {
        try {
            let courses = await courseService.deleteCourses(req.query.id);
            return res.status(200).json(courses);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
};
