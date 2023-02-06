const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogComment = new Schema(
    {
        blogId: {
            type: Schema.Types.ObjectId,
            ref: 'blogs',
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
module.exports = mongoose.model('blogComments', BlogComment);
