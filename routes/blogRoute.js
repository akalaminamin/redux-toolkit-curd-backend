const express = require("express");
const router = express.Router();
const {
  postBlog,
  getBlogs,
  getSingleBlog,
  deleteBlog,
  updateBlog,
} = require("../controller/blogsController");

router.route("/").get(getBlogs).post(postBlog);
router.route("/:id").get(getSingleBlog).delete(deleteBlog).put(updateBlog);

module.exports = router;
