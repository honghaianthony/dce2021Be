const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Lesson = new Schema(
    {
        courseId: {
            type: Schema.Types.ObjectId,
            ref: 'courses',
        },
        lessonName: {
            type: String,
        },
        description: {
            type: String,
        },
        content: {
            type: String,
        },
        // note: [
        //     {
        //         userId: {
        //             type: Schema.Types.ObjectId,
        //             ref: 'users',
        //         },
        //         content: { type: String },
        //         createdAt: {
        //             type: Date,
        //             default: Date.now,
        //         },
        //         updatedAt: {
        //             type: Date,
        //             default: Date.now,
        //         },
        //     },
        // ],
        // userLesson: [
        //     {
        //         userId: {
        //             type: Schema.Types.ObjectId,
        //             ref: 'users',
        //         },
        //         code: { type: String },
        //         isCompleted: {
        //             type: Boolean,
        //         },
        //     },
        // ],
        // lessonComment: [
        //     {
        //         userId: {
        //             type: Schema.Types.ObjectId,
        //             ref: 'users',
        //         },
        //         content: { type: String },
        //         createdAt: {
        //             type: Date,
        //             default: Date.now,
        //         },
        //         updatedAt: {
        //             type: Date,
        //             default: Date.now,
        //         },
        //     },
        // ],
        // test: [
        //     {
        //         input: { type: String },
        //         output: { type: String },
        //     },
        // ],
    },
    {
        timestamps: true,
    },
);

Lesson.pre('remove', function (next) {
    this.model('lessonNotes').remove({ lessonId: this._id }, next);
    this.model('lessonTests').remove({ lessonId: this._id }, next);
    this.model('userLessons').remove({ lessonId: this._id }, next);
    this.model('lessonComments').remove({ lessonId: this._id }, next);
});

module.exports = mongoose.model('lessons', Lesson);
