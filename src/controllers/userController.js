const userService = require("../services/userService");

module.exports = {
    getAllUsers: async function (req, res) {
        try {
            let users = await userService.getAllUsers(req.query.id);
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
            console.log(error);
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
            console.log(error);
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
};
