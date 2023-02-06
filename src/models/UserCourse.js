const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserCourse = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'users',
        },
        courseId: {
            type: Schema.Types.ObjectId,
            ref: 'courses',
        },
        rate: {
            type: Number,
        },
        isCompleted: {
            type: Boolean,
        },
        timeCost: {
            type: Number,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('userCourses', UserCourse);
