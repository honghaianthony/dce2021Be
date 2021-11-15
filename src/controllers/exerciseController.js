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
    getExercises: async function (req, res) {
        try {
            let exercises = await exerciseService.getExercises(req.query.id);
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
};
