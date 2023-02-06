const exerciseService = require('./exercise.service');

module.exports = {
    getAllExercise: async function (req, res, next) {
        try {
            const exercises = await exerciseService.getAllExercise();
            res.status(200).json(exercises);
        } catch (error) {
            console.log(error);
        }
    },
    getAllExerciseById: async function (req, res, next) {
        try {
            const exercises = await exerciseService.getAllExerciseById(
                req.query.id,
            );
            res.status(200).json(exercises);
        } catch (error) {
            console.log(error);
        }
    },
    confirmExercise: async function (req, res, next) {
        try {
            const exercises = await exerciseService.confirmExercise(req);
            res.status(200).json(exercises);
        } catch (error) {
            console.log(error);
        }
    },
    createExercise: async function (req, res, next) {
        try {
            const exercises = await exerciseService.createExercise(req);
            res.status(200).json(exercises);
        } catch (error) {
            console.log(error);
        }
    },
    getTestCaseById: async function (req, res, next) {
        try {
            const exercises = await exerciseService.getTestCaseById(
                req.query.id,
            );
            res.status(200).json(exercises);
        } catch (error) {
            console.log(error);
        }
    },
    getAllTestCase: async function (req, res, next) {
        try {
            const exercises = await exerciseService.getAllTestCase(
                req.query.id,
            );
            res.status(200).json(exercises);
        } catch (error) {
            console.log(error);
        }
    },
    getTestCaseByExerciseId: async function (req, res, next) {
        try {
            const exercises = await exerciseService.getTestCaseByExerciseId(
                req.query.id,
            );
            res.status(200).json(exercises);
        } catch (error) {
            console.log(error);
        }
    },
    createTestCase: async function (req, res, next) {
        try {
            const exercises = await exerciseService.createTestCase(req);
            res.status(200).json(exercises);
        } catch (error) {
            console.log(error);
        }
    },
    updateExercise: async function (req, res, next) {
        try {
            const exercises = await exerciseService.updateExercise(req.body);
            res.status(200).json(exercises);
        } catch (error) {
            console.log(error);
        }
    },
    updateTestCase: async function (req, res, next) {
        try {
            const exercises = await exerciseService.updateTestCase(req.body);
            res.status(200).json(exercises);
        } catch (error) {
            console.log(error);
        }
    },
    deleteExerciseTest: async function (req, res, next) {
        try {
            const exercises = await exerciseService.deleteExerciseTest(
                req.query.id,
            );
            res.status(200).json(exercises);
        } catch (error) {
            console.log(error);
        }
    },
    deleteExercise: async function (req, res, next) {
        try {
            const exercises = await exerciseService.deleteExercise(
                req.query.id,
            );
            res.status(200).json(exercises);
        } catch (error) {
            console.log(error);
        }
    },
};
