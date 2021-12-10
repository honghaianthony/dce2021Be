const models = require("../models");

module.exports = {
  createNewBlog: function (data) {
    return new Promise(async function (resolve, reject) {
      try {
        await models.Blog.create({
          userId: data.userId,
          title: data.title,
          content: data.content,
          coverImage: data.coverImage,
        });

        resolve({
          errCode: 0,
          errMessage: "Create Blog successfully",
        });
      } catch (error) {
        reject(error);
      }
    });
  },
  getAllBlogs: function () {
    return new Promise(async function (resolve, reject) {
      try {
        let blogs;
        blogs = await models.Blog.findAll();
        resolve(blogs);
      } catch (error) {
        reject(error);
      }
    });
  },
  getBlogsById: function (blogId) {
    return new Promise(async function (resolve, reject) {
      try {
        let blogs = "";
        if (blogId && blogId !== "ALL") {
          blogs = await models.Blog.findOne({
            where: { id: blogId },
          });
        }
        resolve(blogs);
      } catch (error) {
        reject(error);
      }
    });
  },
  updateBlogs: function (data) {
    return new Promise(async function (resolve, reject) {
      try {
        if (!data.id || !data.userId) {
          resolve({
            errCode: 1,
            errMessage: "Missing input parameter",
          });
        }
        let blogs = await models.Blog.findOne({
          where: { id: data.id },
          raw: false,
        });
        if (blogs) {
          blogs.title = data.title;
          blogs.content = data.content;
          blogs.coverImage = data.coverImage;

          await blogs.save();

          resolve({
            errCode: 0,
            errMessage: "Update Blog successfully",
          });
        } else {
          resolve({
            errCode: 2,
            errMessage: "Blog not found",
          });
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  deleteBlogs: function (blogId) {
    return new Promise(async function (resolve, reject) {
      try {
        if (!blogId) {
          resolve({
            errCode: 1,
            errMessage: "The blog ID is not existed",
          });
        }
        let blogs = await models.Blog.findOne({
          where: { id: blogId },
        });
        if (blogs) {
          await blogs.destroy();
          resolve({
            errCode: 0,
            errMessage: "The blog has been deleted",
          });
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  createNewComment: function (data) {
    return new Promise(async function (resolve, reject) {
      try {
        await models.BlogComment.create({
          blogId: data.blogId,
          userId: data.userId,
          content: data.content,
        });

        resolve({
          errCode: 0,
          errMessage: "Create Comment successfully",
        });
      } catch (error) {
        reject(error);
      }
    });
  },
  getAllBlogComments: function () {
    return new Promise(async function (resolve, reject) {
      try {
        let comments = "";

        comments = await models.BlogComment.findAll();

        resolve(comments);
      } catch (error) {
        reject(error);
      }
    });
  },
  getBlogCommentId: function (commentId) {
    return new Promise(async function (resolve, reject) {
      try {
        let comments = "";
        if (commentId && commentId !== "ALL") {
          comments = await models.BlogComment.findOne({
            where: { userId: commentId },
          });
        }
        resolve(comments);
      } catch (error) {
        reject(error);
      }
    });
  },
  updateComments: function (data) {
    return new Promise(async function (resolve, reject) {
      try {
        if (!data.blogId || !data.userId || !data.id) {
          resolve({
            errCode: 1,
            errMessage: "Missing input parameter",
          });
        }
        let comments = await models.BlogComment.findOne({
          where: { id: data.id },
          raw: false,
        });
        if (comments) {
          comments.content = data.content;

          await comments.save();

          resolve({
            errCode: 0,
            errMessage: "Update Comment successfully",
          });
        } else {
          resolve({
            errCode: 2,
            errMessage: "Comment not found",
          });
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  deleteComments: function (commentId) {
    return new Promise(async function (resolve, reject) {
      try {
        if (!commentId) {
          resolve({
            errCode: 1,
            errMessage: "The comment ID is not existed",
          });
        }
        let comments = await models.BlogComment.findOne({
          where: { id: commentId },
        });
        if (comments) {
          await comments.destroy();
          resolve({
            errCode: 0,
            errMessage: "The comment has been deleted",
          });
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  createNewBlogImage: function (data) {
    return new Promise(async function (resolve, reject) {
      try {
        await models.BlogImage.create({
          blogId: data.blogId,
          image: data.image,
        });

        resolve({
          errCode: 0,
          errMessage: "Create Blog Image successfully",
        });
      } catch (error) {
        reject(error);
      }
    });
  },
  getAllBlogImages: function () {
    return new Promise(async function (resolve, reject) {
      try {
        let images = "";

        images = await models.BlogImage.findAll();

        resolve(images);
      } catch (error) {
        reject(error);
      }
    });
  },
  getBlogImagesById: function (imageId) {
    return new Promise(async function (resolve, reject) {
      try {
        let images = "";

        if (imageId && imageId !== "ALL") {
          images = await models.BlogImage.findOne({
            where: { id: imageId },
          });
        }
        resolve(images);
      } catch (error) {
        reject(error);
      }
    });
  },
  updateBlogImages: function (data) {
    return new Promise(async function (resolve, reject) {
      try {
        if (!data.blogId || !data.id) {
          resolve({
            errCode: 1,
            errMessage: "Missing input parameter",
          });
        }
        let images = await models.BlogImage.findOne({
          where: { id: data.id },
          raw: false,
        });
        if (images) {
          images.image = data.image;

          await images.save();

          resolve({
            errCode: 0,
            errMessage: "Update image successfully",
          });
        } else {
          resolve({
            errCode: 2,
            errMessage: "Image not found",
          });
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  deleteBlogImages: function (imageId) {
    return new Promise(async function (resolve, reject) {
      try {
        if (!imageId) {
          resolve({
            errCode: 1,
            errMessage: "The image ID is not existed",
          });
        }
        let images = await models.BlogImage.findOne({
          where: { id: imageId },
        });
        if (images) {
          await images.destroy();
          resolve({
            errCode: 0,
            errMessage: "The image has been deleted",
          });
        }
      } catch (error) {
        reject(error);
      }
    });
  },
};
