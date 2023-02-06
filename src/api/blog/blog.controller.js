const blogService = require('./blog.service');

module.exports = {
    getAllBlogs: async function (req, res) {
        try {
            const blogs = await blogService.getAllBlogs();
            return res.status(200).json(blogs);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: 'Error from server',
            });
        }
    },
    getBlogById: async function (req, res) {
        try {
            const blogs = await blogService.getBlogById(req);
            return res.status(200).json(blogs);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: 'Error from server',
            });
        }
    },
    getAllBlogCommentByBlogId: async function (req, res) {
        try {
            const cmts = await blogService.getAllBlogCommentByBlogId(req);
            return res.status(200).json(cmts);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: 'Error from server',
            });
        }
    },
    postBlog: async function (req, res) {
        try {
            const cmts = await blogService.postBlog(req);
            return res.status(200).json(cmts);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: 'Error from server',
            });
        }
    },

    updateBlogById: async function (req, res) {
        try {
            const cmts = await blogService.updateBlogById(req);
            return res.status(200).json(cmts);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: 'Error from server',
            });
        }
    },

    deleteBlog: async function (req, res) {
        try {
            const cmts = await blogService.deleteBlog(req);
            return res.status(200).json(cmts);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: 'Error from server',
            });
        }
    },
};
