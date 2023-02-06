const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Exercise = new Schema(
    {
        exerciseName: {
            type: String,
        },
        content: {
            type: String,
        },
        level: {
            type: Number,
        },
        // userExercise: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'users',
        //         code: { type: String },
        //         isCompleted: {
        //             type: Boolean,
        //         },
        //         timeCost: { type: Number },
        //     },
        // ],
        // test: [
        //     {
        //         input: { type: String },
        //         output: { type: String },
        //     },
        // ],
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'users',
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('exercises', Exercise);
