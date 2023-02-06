const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blog = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
        title: { type: String, require: true },
        content: { type: String, require: true },
        coverImage: { type: String },
        blogImage: [String],
        // blogComment: [
        //     {
        //         user: {
        //             type: Schema.Types.ObjectId,
        //             ref: 'users',
        //             required: true,
        //         },
        //         content: { type: String },
        //         createdAt: { type: Date, default: Date.now },
        //         updateAt: { type: Date, default: Date.now },
        //     },
        // ],
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('blogs', Blog);
