const userService = require("../services/userService");

module.exports = {
    getUsers: async function (req, res) {
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
    getUserExercise: async function (req, res) {
        try {
            let userLesson = await userService.getUserExercise(req.query.id);
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
};
