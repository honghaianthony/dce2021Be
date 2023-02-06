const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseTest = new Schema(
    {
        exerciseId: {
            type: Schema.Types.ObjectId,
            ref: 'exercises',
        },
        input: {
            type: String,
        },
        output: {
            type: String,
        },
    },
    // {
    //     timestamps: true,
    // },
);

module.exports = mongoose.model('exerciseTests', ExerciseTest);
