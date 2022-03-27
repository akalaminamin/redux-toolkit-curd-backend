const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
});

const Blog = new mongoose.model("Blog", blogSchema);
module.exports = Blog;
