const userService = require("../services/userService");

module.exports = {
    getAllUsers: async function (req, res) {
        try {
            let users = await userService.getAllUsers();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getUserById: async function (req, res) {
        try {
            let users = await userService.getUsers(req.query.id);
            return res.status(200).json(users);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    updateUsers: async function (req, res) {
        try {
            let users = await userService.updateUsers(req.body);
            return res.status(200).json(users);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    deleteUsers: async function (req, res) {
        try {
            let users = await userService.deleteUsers(req.query.id);
            return res.status(200).json(users);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    createNewUserExercise: async function (req, res) {
        try {
            let userLesson = await userService.createNewUserExercise(req.body);
            return res.status(200).json(userLesson);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getAllUsersExercise: async function (req, res) {
        try {
            let userLesson = await userService.getAllUsersExercise();
            return res.status(200).json(userLesson);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getUserExerciseById: async function (req, res) {
        try {
            let userLesson = await userService.getUserExerciseById(
                req.query.id
            );
            return res.status(200).json(userLesson);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    updateUserExercise: async function (req, res) {
        try {
            let userLesson = await userService.updateUserExercise(req.body);
            return res.status(200).json(userLesson);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    deleteUserExercise: async function (req, res) {
        try {
            let userLesson = await userService.deleteUserExercise(req.query.id);
            return res.status(200).json(userLesson);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    createNewUserCourse: async function (req, res) {
        try {
            let userLesson = await userService.createNewUserCourse(req.body);
            return res.status(200).json(userLesson);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getAllUsersExerciseCourse: async function (req, res) {
        try {
            let userLesson = await userService.getAllUsersExerciseCourse();
            return res.status(200).json(userLesson);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getUserCourseById: async function (req, res) {
        try {
            let userLesson = await userService.getUserCourseById(req.query.id);
            return res.status(200).json(userLesson);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    updateUserCourse: async function (req, res) {
        try {
            let userLesson = await userService.updateUserCourse(req.body);
            return res.status(200).json(userLesson);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    deleteUserCourse: async function (req, res) {
        try {
            let userLesson = await userService.deleteUserCourse(req.query.id);
            return res.status(200).json(userLesson);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    createNewUserLesson: async function (req, res) {
        try {
            let userLesson = await userService.createNewUserLesson(req.body);
            return res.status(200).json(userLesson);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getAllUsersLesson: async function (req, res) {
        try {
            let userLesson = await userService.getAllUsersLesson();
            return res.status(200).json(userLesson);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getUserLessonById: async function (req, res) {
        try {
            let userLesson = await userService.getUserLessonById(req.query.id);
            return res.status(200).json(userLesson);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    updateUserLesson: async function (req, res) {
        try {
            let userLesson = await userService.updateUserLesson(req.body);
            return res.status(200).json(userLesson);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    deleteUserLesson: async function (req, res) {
        try {
            let userLesson = await userService.deleteUserLesson(req.query.id);
            return res.status(200).json(userLesson);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
};