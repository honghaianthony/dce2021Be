const exerciseService = require("../services/exerciseService");

module.exports = {
    createNewExercise: async function (req, res) {
        try {
            let exercises = await exerciseService.createNewExercise(req.body);
            return res.status(200).json(exercises);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getAllExercises: async function (req, res) {
        try {
            let exercises = await exerciseService.getAllExercises();
            return res.status(200).json(exercises);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getExercisesById: async function (req, res) {
        try {
            let exercises = await exerciseService.getExercisesById(
                req.query.id
            );
            return res.status(200).json(exercises);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    updateExercises: async function (req, res) {
        try {
            let exercises = await exerciseService.updateExercises(req.body);
            return res.status(200).json(exercises);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    deleteExercises: async function (req, res) {
        try {
            let exercises = await exerciseService.deleteExercises(req.query.id);
            return res.status(200).json(exercises);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    confirmDoExercise: async function (req, res) {
        try {
            let exercises = await exerciseService.confirmDoExercise(req.body);
            return res.status(200).json(exercises);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
};
