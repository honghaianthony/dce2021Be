const lessonService = require('./lesson.service');

module.exports = {
    getAllLesson: async function (req, res, next) {
        try {
            const lessons = await lessonService.getAllLesson(req);
            res.status(200).json(lessons);
        } catch (error) {
            next(error);
        }
    },
    getLessonById: async function (req, res, next) {
        try {
            const lesson = await lessonService.getLessonById(req);
            res.status(200).json(lesson);
        } catch (error) {
            next(error);
        }
    },
    createLesson: async function (req, res, next) {
        try {
            const lesson = await lessonService.createLesson(req);
            res.status(201).json(lesson);
        } catch (error) {
            next(error);
        }
    },
    deleteLessonById: async function (req, res, next) {
        try {
            const lesson = await lessonService.deleteLessonById(req);
            res.status(200).json(lesson);
        } catch (error) {
            next(error);
        }
    },
    createLessonTest: async function (req, res, next) {
        try {
            const lesson = await lessonService.createLessonTest(req);
            res.status(201).json(lesson);
        } catch (error) {
            next(error);
        }
    },
    updateNote: async function (req, res, next) {
        try {
            const note = await lessonService.updateNote(req);
            res.status(note.statusCode).json(note);
        } catch (error) {
            next(error);
        }
    },
    updateLessonById: async function (req, res, next) {
        try {
            const lesson = await lessonService.updateLessonById(req);
            res.status(200).json(lesson);
        } catch (error) {
            next(error);
        }
    },
    updateLessonTestById: async function (req, res, next) {
        try {
            const lesson = await lessonService.updateLessonTestById(req);
            res.status(200).json(lesson);
        } catch (error) {
            next(error);
        }
    },
    getAllLessonTestById: async function (req, res, next) {
        try {
            const tests = await lessonService.getAllLessonTestById(req);
            res.status(200).json(tests);
        } catch (error) {
            next(error);
        }
    },
    getAllLessonComment: async function (req, res, next) {
        try {
            const comments = await lessonService.getAllLessonComment(req);
            res.status(200).json(comments);
        } catch (error) {
            next(error);
        }
    },
    getLessonNote: async function (req, res, next) {
        try {
            const note = await lessonService.getLessonNote(req);
            res.status(200).json(note);
        } catch (error) {
            next(error);
        }
    },
};
