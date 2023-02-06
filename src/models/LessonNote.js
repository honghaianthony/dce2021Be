const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonNote = new Schema(
    {
        lessonId: {
            type: Schema.Types.ObjectId,
            ref: 'lessons',
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'users',
        },
        content: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);
module.exports = mongoose.model('lessonNotes', LessonNote);
