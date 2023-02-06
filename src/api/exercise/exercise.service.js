const model = require('../../models');

module.exports = {
    getAllExercise: function () {
        return new Promise(async function (resolve, reject) {
            try {
                let exercises = await model.Exercise.find();
                resolve(exercises);
            } catch (error) {
                reject(error);
            }
        });
    },
    getAllExerciseById: function (exerciseId) {
        return new Promise(async function (resolve, reject) {
            try {
                let exercises = await model.Exercise.findOne({
                    _id: exerciseId,
                });
                resolve(exercises);
            } catch (error) {
                reject(error);
            }
        });
    },
    confirmExercise: function (req) {
        const userId = req.user.id;
        const exerciseId = req.query.exerciseId;
        return new Promise(async function (resolve, reject) {
            try {
                if (!exerciseId) {
                    resolve({
                        errCode: 1,
                        errMessage: 'Missing parameter',
                    });
                } else {
                    const exercise = await model.UserExercise.findOne({
                        userId,
                        exerciseId,
                    });
                    if (exercise) {
                        resolve({
                            errCode: 0,
                            errMessage: 'Exercise was completed',
                        });
                    } else {
                        resolve({
                            errCode: 3,
                            errMessage: 'Exercise not found',
                        });
                    }
                }
            } catch (e) {
                reject(e);
            }
        });
    },
    createExercise: function (req) {
        const data = req.body;

        return new Promise(async function (resolve, reject) {
            try {
                await model.Exercise.create({
                    exerciseName: data.exerciseName,
                    content: data.content,
                    level: data.level,
                });

                resolve({
                    errCode: 0,
                    errMessage: 'Create exercise successfully',
                });
            } catch (error) {
                reject(error);
            }
        });
    },
    getTestCaseById: function (testId) {
        return new Promise(async function (resolve, reject) {
            try {
                let exercises = await model.ExerciseTest.find({
                    _id: testId,
                });
                resolve(exercises);
            } catch (error) {
                reject(error);
            }
        });
    },
    getAllTestCase: function () {
        return new Promise(async function (resolve, reject) {
            try {
                let exercises = await model.ExerciseTest.find();
                resolve(exercises);
            } catch (error) {
                reject(error);
            }
        });
    },
    getTestCaseByExerciseId: function (exerciseId) {
        return new Promise(async function (resolve, reject) {
            try {
                let exercises = await model.ExerciseTest.find({
                    exerciseId: exerciseId,
                });
                resolve(exercises);
            } catch (error) {
                reject(error);
            }
        });
    },
    createTestCase: function (req) {
        const data = req.body;
        return new Promise(async function (resolve, reject) {
            try {
                await model.ExerciseTest.create({
                    exerciseId: data.exerciseId,
                    input: data.input,
                    output: data.output,
                });

                resolve({
                    errCode: 0,
                    errMessage: 'Create test case successfully',
                });
            } catch (error) {
                reject(error);
            }
        });
    },
    updateExercise: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!data.id) {
                    resolve({
                        errorCode: 1,
                        errMessage: 'Missing input parameter',
                    });
                }
                let exercise = await model.Exercise.findOne({ _id: data.id });
                if (exercise) {
                    exercise.exerciseName = data.exerciseName;
                    exercise.content = data.content;
                    exercise.level = data.level;

                    await exercise.save();
                    resolve({
                        errCode: 0,
                        errMessage: 'Update exercise successfully',
                    });
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: 'Exercise not found',
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },
    updateTestCase: function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!data.id) {
                    resolve({
                        errorCode: 1,
                        errMessage: 'Missing input parameter',
                    });
                }
                let exercises = await model.ExerciseTest.findOne({
                    _id: data.id,
                });
                if (exercises) {
                    exercises.input = data.input;
                    exercises.output = data.output;

                    await exercises.save();
                    resolve({
                        errCode: 0,
                        errMessage: 'Update test case successfully',
                    });
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: 'Test case not found',
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },
    deleteExerciseTest: function (testCaseId) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!testCaseId) {
                    resolve({
                        errorCode: 1,
                        errMessage: 'The test case ID is not existed',
                    });
                }
                let exercise = await model.ExerciseTest.findOne({
                    _id: testCaseId,
                });
                if (exercise) {
                    await exercise.delete();
                    resolve({
                        errCode: 0,
                        errMessage: 'The test case has been deleted',
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },
    deleteExercise: function (exerciseId) {
        return new Promise(async function (resolve, reject) {
            try {
                if (!exerciseId) {
                    resolve({
                        errorCode: 1,
                        errMessage: 'The exercise ID is not existed',
                    });
                }
                let exercise = await model.Exercise.findOne({
                    _id: exerciseId,
                });
                if (exercise) {
                    await exercise.delete();
                    resolve({
                        errCode: 0,
                        errMessage: 'The exercise has been deleted',
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },
};
