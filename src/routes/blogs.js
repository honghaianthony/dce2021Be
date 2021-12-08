const express = require("express");
const router = express.Router();

/* GET users listing. */
const blogController = require("../controllers/blogController");

router.post("/create-new-blog", blogController.createNewBlog);
router.get("/get-all-blogs", blogController.getAllBlogs);
router.get("/get-blog-by-id", blogController.getBlogsById);
router.put("/update-blog", blogController.updateBlogs);
router.get("/delete-blog", blogController.deleteBlogs);

router.post("/create-new-comment", blogController.createNewComment);
router.get("/get-all-blog-comments", blogController.getAllBlogComments);
router.get("/get-blog-comment-by-id", blogController.getBlogCommentId);
router.put("/update-comment", blogController.updateComments);
router.get("/delete-comment", blogController.deleteComments);

router.post("/create-new-blog-image", blogController.createNewBlogImage);
router.get("/get-all-blog-images", blogController.getAllBlogImages);
router.get("/get-blog-image-by-id", blogController.getBlogImagesById);
router.put("/update-blog-image", blogController.updateBlogImages);
router.get("/delete-blog-image", blogController.deleteBlogImages);

module.exports = router;
