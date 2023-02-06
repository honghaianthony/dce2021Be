const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonTest = new Schema(
    {
        lessonId: {
            type: Schema.Types.ObjectId,
            ref: 'lessons',
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

module.exports = mongoose.model('lessonTests', LessonTest);
