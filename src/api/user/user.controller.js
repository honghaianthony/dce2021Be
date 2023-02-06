const userService = require('./user.service.js');

module.exports = {
    getAllUsers: async function (req, res, next) {
        try {
            var users = await userService.getAllUsers();
            return res
                .status(200)
                .json({ users: users, message: 'successfully Users' });
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },
    getUserById: async function (req, res, next) {
        try {
            var user = await userService.getUserById(req);
            return res.status(200).json({ user, message: 'successfully' });
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },
    getUserCourseByCourseId: async function (req, res, next) {
        try {
            var data = await userService.getUserCourseByCourseId(req);
            return res.status(200).json({ data, message: 'Success' });
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },
    createUserCourse: async function (req, res, next) {
        try {
            const userCourse = await userService.createUserCourse(req);
            res.status(200).json({ userCourse });
        } catch (e) {
            console.log(e);
        }
    },
    updateRole: async function (req, res, next) {
        try {
            const user = await userService.updateRole(req.body);
            res.status(200).json(user);
        } catch (e) {
            console.log(e);
        }
    },
    getUserLessonByLessonId: async function (req, res, next) {
        try {
            const userLesson = await userService.getUserLesson(req);
            res.status(200).json({ userLesson });
        } catch (e) {
            console.log(e);
        }
    },
    registerLesson: async function (req, res, next) {
        try {
            const lesson = await userService.registerLesson(req);
            res.status(200).json(lesson);
        } catch (e) {
            console.log(e);
        }
    },
    registerExercise: async function (req, res, next) {
        try {
            const userExercise = await userService.registerExercise(req);
            res.status(200).json(userExercise);
        } catch (e) {
            console.log(e);
        }
    },
    doneLesson: async function (req, res, next) {
        try {
            const doneLesson = await userService.doneLesson(req);
            res.status(200).json(doneLesson);
        } catch (e) {
            console.log(e);
        }
    },
    doneCourse: async function (req, res, next) {
        try {
            const doneCourse = await userService.doneCourse(req);
            res.status(200).json(doneCourse);
        } catch (e) {
            console.log(e);
        }
    },
    checkDoneCourse: async function (req, res, next) {
        try {
            var data = await userService.checkDoneCourse(req);
            return res.status(200).json({ data, message: 'successfully' });
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },
    checkDoneUserLesson: async function (req, res, next) {
        try {
            var data = await userService.checkDoneUserLesson(req);
            return res.status(200).json(data);
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },
    getCompletedUserLessonByLessonId: async function (req, res, next) {
        try {
            var data = await userService.getCompletedUserLessonByLessonId(req);
            return res.status(200).json(data);
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },
    getMe: async function (req, res, next) {
        try {
            var user = await userService.getMe(req);
            return res.status(200).json({ user, message: 'successfully' });
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },
    getAllUserCourse: async function (req, res, next) {
        try {
            var courses = await userService.getAllUserCourse(req);
            return res.status(200).json({ courses, message: 'successfully' });
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },
    getAllUserExercise: async function (req, res, next) {
        try {
            var exercises = await userService.getAllUserExercise(req);
            return res.status(200).json({ exercises, message: 'successfully' });
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },
    updateUserInfo: async function (req, res) {
        try {
            const result = await userService.updateUserInfo(req);
            if (result.success == true) {
                res.status(200).json(result);
            } else {
                res.status(200).json(result);
            }
        } catch (error) {}
    },
};
