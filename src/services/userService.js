const models = require("../models");

module.exports = {
    getAllUsers: function (userId) {
        return new Promise(async function (resolve, reject) {
            try {
                let users = "";
                if (userId === "ALL") {
                    users = await models.User.findAll({
                        attributes: {
                            exclude: ["password"],
                        },
                    });
                }
                if (userId && userId !== "ALL") {
                    users = await models.User.findOne({
                        where: { id: userId },
                        attributes: {
                            exclude: ["password"],
                        },
                    });
                }
                resolve(users);
            } catch (error) {
                reject(error);
            }
        });
    },
    updateUsers: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!data.id || !data.email || !data.role || !data.username) {
                    resolve({
                        errCode: 1,
                        errMessage: "Missing input parameter",
                    });
                }
                let user = await models.User.findOne({
                    where: { id: data.id },
                    raw: false,
                });
                if (user) {
                    user.phone = data.phone;
                    user.firstName = data.firstName;
                    user.lastName = data.lastName;
                    user.dateOfBirth = data.dateOfBirth;

                    await user.save();

                    resolve({
                        errCode: 0,
                        errMessage: "Update info successfully",
                    });
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: "User not found",
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },
    updateUsers: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!data.id || !data.email || !data.role || !data.username) {
                    resolve({
                        errCode: 1,
                        errMessage: "Missing input parameter",
                    });
                }
                let user = await models.User.findOne({
                    where: { id: data.id },
                    raw: false,
                });
                if (user) {
                    user.phone = data.phone;
                    user.firstName = data.firstName;
                    user.lastName = data.lastName;
                    user.dateOfBirth = data.dateOfBirth;

                    await user.save();

                    resolve({
                        errCode: 0,
                        errMessage: "Update info successfully",
                    });
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: "User not found",
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },
    deleteUsers: function (userId) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!userId) {
                    resolve({
                        errCode: 1,
                        errMessage: "The user ID is not existed",
                    });
                }
                let user = await models.User.findOne({
                    where: { id: userId },
                });
                if (user) {
                    await user.destroy();
                    resolve({
                        errCode: 0,
                        errMessage: "The user has been deleted",
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },
};
