const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserLesson = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'users',
        },
        lessonId: {
            type: Schema.Types.ObjectId,
            ref: 'lessons',
        },
        isCompleted: {
            type: Boolean,
        },
        code: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('userLessons', UserLesson);
