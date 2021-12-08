const lessonService = require("../services/lessonService");

module.exports = {
    createNewLesson: async function (req, res) {
        try {
            let lessons = await lessonService.createNewLesson(req.body);
            return res.status(200).json(lessons);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getAllLessons: async function (req, res) {
        try {
            let lessons = await lessonService.getAllLessons();
            return res.status(200).json(lessons);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getLessonsById: async function (req, res) {
        try {
            let lessons = await lessonService.getLessonsById(req.query.id);
            return res.status(200).json(lessons);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    updateLessons: async function (req, res) {
        try {
            let lessons = await lessonService.updateLessons(req.body);
            return res.status(200).json(lessons);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    deleteLessons: async function (req, res) {
        try {
            let lessons = await lessonService.deleteLessons(req.query.id);
            return res.status(200).json(lessons);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
};
