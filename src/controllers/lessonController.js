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
    getAllLessonsByCourseId: async function (req, res) {
        try {
            let lessons = await lessonService.getAllLessonsByCourseId(
                req.query.courseId
            );
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
    createNewLessonComment: async function (req, res) {
        try {
            let lessons = await lessonService.createNewLessonComment(req.body);
            return res.status(200).json(lessons);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getAllLessonsComment: async function (req, res) {
        try {
            let lessons = await lessonService.getAllLessonsComment();
            return res.status(200).json(lessons);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getLessonsByIdComment: async function (req, res) {
        try {
            let lessons = await lessonService.getLessonsByIdComment(
                req.query.id
            );
            return res.status(200).json(lessons);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    updateLessonsComment: async function (req, res) {
        try {
            let lessons = await lessonService.updateLessonsComment(req.body);
            return res.status(200).json(lessons);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    deleteLessonsComment: async function (req, res) {
        try {
            let lessons = await lessonService.deleteLessonsComment(
                req.query.id
            );
            return res.status(200).json(lessons);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    createNewLessonTest: async function (req, res) {
        try {
            let lessons = await lessonService.createNewLessonTest(req.body);
            return res.status(200).json(lessons);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getAllLessonsTest: async function (req, res) {
        try {
            let lessons = await lessonService.getAllLessonsTest();
            return res.status(200).json(lessons);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getAllLessonsTestByLessonId: async function (req, res) {
        try {
            let lessons = await lessonService.getAllLessonsTestByCourseId(
                req.query.lessonId
            );
            return res.status(200).json(lessons);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getLessonsByIdTest: async function (req, res) {
        try {
            let lessons = await lessonService.getLessonsByIdTest(req.query.id);
            return res.status(200).json(lessons);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    updateLessonsTest: async function (req, res) {
        try {
            let lessons = await lessonService.updateLessonsTest(req.body);
            return res.status(200).json(lessons);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    deleteLessonsTest: async function (req, res) {
        try {
            let lessons = await lessonService.deleteLessonsTest(req.query.id);
            return res.status(200).json(lessons);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
};
