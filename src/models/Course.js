const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        courseName: {
            type: String,
        },
        description: {
            type: String,
        },
        time: {
            type: Number,
        },
        image: {
            type: String,
        },
        rating: {
            type: Number,
        },
        // userCourse: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'users',
        //         rate: {
        //             type: Number,
        //         },
        //         isCompleted: {
        //             type: Boolean,
        //         },
        //         timeCost: {
        //             type: Number,
        //         },
        //     },
        // ],
    },
    {
        timestamps: true,
    },
);

Course.pre('remove', function (next) {
    this.model('lessons').remove({ courseId: this._id }, next);
    this.model('userCourses').remove({ courseId: this._id }, next);
});

module.exports = mongoose.model('courses', Course);
