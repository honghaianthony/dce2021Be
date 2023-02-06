const express = require('express');
const passport = require('passport');
const router = express.Router();
const blogController = require('./blog.controller');

/* Blog */
router.get('/get-all-blogs', blogController.getAllBlogs);
router.get('/get-blog-by-id', blogController.getBlogById);
router.get('/get-all-blog-comments', blogController.getAllBlogCommentByBlogId);
router.post(
    '/create-new-blog',
    passport.authenticate('jwt', { session: false }),
    blogController.postBlog,
);
router.put(
    '/update-blog',
    passport.authenticate('jwt', { session: false }),
    blogController.updateBlogById,
);

router.delete(
    '/delete-blog',
    passport.authenticate('jwt', { session: false }),
    blogController.deleteBlog,
);

module.exports = router;
