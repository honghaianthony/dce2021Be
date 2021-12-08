const blogService = require("../services/blogService");

module.exports = {
    createNewBlog: async function (req, res) {
        try {
            let blog = await blogService.createNewBlog(req.body);
            return res.status(200).json(blog);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getAllBlogs: async function (req, res) {
        try {
            let blog = await blogService.getAllBlogs();
            return res.status(200).json(blog);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getBlogsById: async function (req, res) {
        try {
            let blog = await blogService.getBlogsById(req.query.id);
            return res.status(200).json(blog);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    updateBlogs: async function (req, res) {
        try {
            let blog = await blogService.updateBlogs(req.body);
            return res.status(200).json(blog);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    deleteBlogs: async function (req, res) {
        try {
            let blog = await blogService.deleteBlogs(req.query.id);
            return res.status(200).json(blog);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    createNewComment: async function (req, res) {
        try {
            let comment = await blogService.createNewComment(req.body);
            return res.status(200).json(comment);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getAllBlogComments: async function (req, res) {
        try {
            let comment = await blogService.getAllBlogComments();
            return res.status(200).json(comment);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getBlogCommentId: async function (req, res) {
        try {
            let comment = await blogService.getBlogCommentId(req.query.id);
            return res.status(200).json(comment);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    updateComments: async function (req, res) {
        try {
            let comment = await blogService.updateComments(req.body);
            return res.status(200).json(comment);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    deleteComments: async function (req, res) {
        try {
            let comment = await blogService.deleteComments(req.query.id);
            return res.status(200).json(comment);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    createNewBlogImage: async function (req, res) {
        try {
            let image = await blogService.createNewBlogImage(req.body);
            return res.status(200).json(image);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getAllBlogImages: async function (req, res) {
        try {
            let image = await blogService.getAllBlogImages();
            return res.status(200).json(image);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    getBlogImagesById: async function (req, res) {
        try {
            let image = await blogService.getBlogImagesById(req.query.id);
            return res.status(200).json(image);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    updateBlogImages: async function (req, res) {
        try {
            let image = await blogService.updateBlogImages(req.body);
            return res.status(200).json(image);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
    deleteBlogImages: async function (req, res) {
        try {
            let image = await blogService.deleteBlogImages(req.query.id);
            return res.status(200).json(image);
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
            });
        }
    },
};
