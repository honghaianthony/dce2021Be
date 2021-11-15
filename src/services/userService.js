const models = require("../models");

module.exports = {
    getUsers: function (userId) {
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
    createNewUserExercise: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                await models.UserExercise.create({
                    userId: data.userId,
                    exerciseId: data.exerciseId,
                    code: data.code,
                    isCompleted: data.isCompleted,
                });

                resolve({
                    errCode: 0,
                    errMessage: "Create User Exercise successfully",
                });
            } catch (error) {
                reject(error);
            }
        });
    },
    getUserExercise: function (exerciseId) {
        return new Promise(async function (resolve, reject) {
            try {
                let userExercise = "";
                if (exerciseId === "ALL") {
                    userExercise = await models.UserExercise.findAll();
                }
                if (exerciseId && exerciseId !== "ALL") {
                    userExercise = await models.UserExercise.findOne({
                        where: { id: exerciseId },
                    });
                }
                resolve(userExercise);
            } catch (error) {
                reject(error);
            }
        });
    },
    updateUserExercise: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!data.userId || !data.exerciseId) {
                    resolve({
                        errCode: 1,
                        errMessage: "Missing input parameter",
                    });
                }
                let userExercise = await models.UserExercise.findOne({
                    where: { id: data.id },
                    raw: false,
                });
                if (userExercise) {
                    userExercise.code = data.code;
                    userExercise.isCompleted = data.isCompleted;

                    await userExercise.save();

                    resolve({
                        errCode: 0,
                        errMessage: "Update User Exercise successfully",
                    });
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: "User with this exercise not found",
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },
    deleteUserExercise: function (exerciseId) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!exerciseId) {
                    resolve({
                        errCode: 1,
                        errMessage: "The User Exercise ID is not existed",
                    });
                }
                let userExercise = await models.UserExercise.findOne({
                    where: { id: exerciseId },
                });
                if (userExercise) {
                    await userExercise.destroy();
                    resolve({
                        errCode: 0,
                        errMessage: "The  User Exercise has been deleted",
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },
};
