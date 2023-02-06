const models = require('../../models');
const authService = require('../auth/auth.service');

module.exports = {
    getAllBlogs: function () {
        return new Promise(async function (resolve, reject) {
            try {
                const blogs = await models.Blog.find().populate('user');
                resolve(blogs);
            } catch (error) {
                reject(error);
            }
        });
    },
    getBlogById: function (req) {
        const blogId = req.query.id;
        return new Promise(async function (resolve, reject) {
            try {
                const blog = await models.Blog.findOne({
                    _id: blogId,
                }).populate('user');
                resolve(blog);
            } catch (error) {
                reject(error);
            }
        });
    },
    getAllBlogCommentByBlogId: function (req) {
        const blogId = req.query.id;
        return new Promise(async function (resolve, reject) {
            try {
                const blogComment = await models.BlogComment.find({
                    blogId: blogId,
                }).populate('userId');
                resolve(blogComment);
            } catch (error) {
                reject(error);
            }
        });
    },
    postBlog: function (req) {
        const data = req.body;
        return new Promise(async function (resolve, reject) {
            try {
                const User = await models.User.findOne({
                    _id: req.user.id,
                });
                if (User) {
                    const x = await models.Blog.create({
                        user: User,
                        title: data.title,
                        content: data.content,
                        coverImage: data.coverImage,
                        blogImage: data.blogImage,
                    });
                    resolve({
                        errCode: 0,
                        errMessage: 'Created',
                    });
                } else {
                    resolve({
                        errCode: 1,
                        errMessage: 'User not exist',
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },

    updateBlogById: function (req) {
        return new Promise(async function (resolve, reject) {
            try {
                const data = req.body;
                const Blog = await models.Blog.findOne({
                    _id: req.body.blogId,
                });
                if (Blog) {
                    const y = await models.Blog.findByIdAndUpdate(Blog._id, {
                        title: data.title,
                        description: data.description,
                        content: data.content,
                    });
                    resolve({
                        errCode: 0,
                        errMessage: 'Updated',
                    });
                } else {
                    resolve({
                        errCode: 1,
                        errMessage: 'Blog not exist',
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },

    deleteBlog: function (req) {
        const blogId = req.query.id;
        return new Promise(async function (resolve, reject) {
            try {
                const Blog = await models.Blog.findOne({
                    _id: blogId,
                });
                if (Blog) {
                    await models.BlogComment.deleteMany({
                        blogId: blogId,
                    });
                    const z = await models.Blog.deleteOne({
                        _id: blogId,
                    });
                    resolve({
                        errCode: 0,
                        errMessage: 'Deleted',
                    });
                } else {
                    resolve({
                        errCode: 1,
                        errMessage: 'Blog does not exist to delete',
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    },
};
