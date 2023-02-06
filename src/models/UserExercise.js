const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserExercise = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'users',
        },
        exerciseId: {
            type: Schema.Types.ObjectId,
            ref: 'exercises',
        },
        isCompleted: {
            type: Boolean,
        },
        code: {
            type: String,
        },
        timeCost: {
            type: Number,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('userExercises', UserExercise);
