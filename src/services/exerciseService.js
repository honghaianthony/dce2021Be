const models = require("../models");

module.exports = {
    createNewExercise: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                await models.Exercise.create({
                    userId: data.userId,
                    name: data.name,
                    content: data.content,
                    input: data.input,
                    output: data.output,
                    level: data.level,
                });

                resolve({
                    errCode: 0,
                    errMessage: "Create exercise successfully",
                });
            } catch (error) {
                reject(error);
            }
        });
    },
    getExercises: function (exerciseId) {
        return new Promise(async function (resolve, reject) {
            try {
                let exercises = "";
                if (exerciseId === "ALL") {
                    exercises = await models.Exercise.findAll();
                }
                if (exerciseId && exerciseId !== "ALL") {
                    exercises = await models.Exercise.findOne({
                        where: { id: exerciseId },
                    });
                }
                resolve(exercises);
            } catch (error) {
                reject(error);
            }
        });
    },
    updateExercises: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!data.id || !data.userId) {
                    resolve({
                        errCode: 1,
                        errMessage: "Missing input parameter",
                    });
                }
                let exercises = await models.Exercise.findOne({
                    where: { id: data.id },
                    raw: false,
                });
                if (exercises) {
                    exercises.name = data.name;
                    exercises.content = data.content;
                    exercises.input = data.input;
                    exercises.output = data.output;
                    exercises.level = data.level;
                    await exercises.save();

                    resolve({
                        errCode: 0,
                        errMessage: "Update exercise successfully",
                    });
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: "Exercise not found",
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },
    deleteExercises: function (exerciseId) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!exerciseId) {
                    resolve({
                        errCode: 1,
                        errMessage: "The exercises ID is not existed",
                    });
                }
                let exercises = await models.Exercise.findOne({
                    where: { id: exerciseId },
                });
                if (exercises) {
                    await exercises.destroy();
                    resolve({
                        errCode: 0,
                        errMessage: "The exercises has been deleted",
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },
};
