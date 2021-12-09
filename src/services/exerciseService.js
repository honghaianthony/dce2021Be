const models = require("../models");

module.exports = {
    createNewExercise: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                await models.Exercise.create({
                    userId: data.userId,
                    exerciseName: data.exerciseName,
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
    getAllExercises: function () {
        return new Promise(async function (resolve, reject) {
            try {
                let exercise = await models.Exercise.findAll();
                resolve({
                    errCode: 0,
                    data: exercise,
                });
            } catch (error) {
                reject(error);
            }
        });
    },
    getExercisesById: function (exerciseId) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!exerciseId) {
                    resolve({
                        errCode: 1,
                        errMessage: "Missing parameter input",
                    });
                } else {
                    let exercises = "";
                    if (exerciseId && exerciseId !== "ALL") {
                        exercises = await models.Exercise.findOne({
                            where: { id: exerciseId },
                        });
                    }
                    resolve(exercises);
                }
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
                    exercises.exerciseName = data.exerciseName;
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
    createNewExerciseTest: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                await models.ExerciseTest.create({
                    exerciseId: data.exerciseId,
                    input: data.input,
                    output: data.output,
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
    getAllExercisesTest: function () {
        return new Promise(async function (resolve, reject) {
            try {
                let exercise = await models.ExerciseTest.findAll();
                resolve({
                    errCode: 0,
                    data: exercise,
                });
            } catch (error) {
                reject(error);
            }
        });
    },
    getExercisesTestById: function (exerciseId) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!exerciseId) {
                    resolve({
                        errCode: 1,
                        errMessage: "Missing parameter input",
                    });
                } else {
                    let exercises = "";
                    if (exerciseId && exerciseId !== "ALL") {
                        exercises = await models.ExerciseTest.findOne({
                            where: { id: exerciseId },
                        });
                    }
                    resolve(exercises);
                }
            } catch (error) {
                reject(error);
            }
        });
    },
    updateExercisesTest: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!data.id) {
                    resolve({
                        errCode: 1,
                        errMessage: "Missing input parameter",
                    });
                }
                let exercises = await models.ExerciseTest.findOne({
                    where: { id: data.id },
                    raw: false,
                });
                if (exercises) {
                    exercises.input = data.input;
                    exercises.output = data.output;

                    await exercises.save();

                    resolve({
                        errCode: 0,
                        errMessage: "Update exercise test successfully",
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
    deleteExercisesTest: function (exerciseId) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!exerciseId) {
                    resolve({
                        errCode: 1,
                        errMessage: "The exercises ID is not existed",
                    });
                }
                let exercises = await models.ExerciseTest.findOne({
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
    confirmDoExercise: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                await models.Exercise.create({
                    userId: data.userId,
                    exerciseId: data.exerciseId,
                });
                resolve({
                    errCode: 0,
                    errMessage: "Confirm Doing Exercise",
                });
            } catch (error) {
                reject(error);
            }
        });
    },
};
