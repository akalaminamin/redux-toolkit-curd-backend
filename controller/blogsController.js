const Blog = require("../model/blogSchema");

// get all blog api
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

// post blog api
const postBlog = async (req, res) => { 
  try {
    const blog = Blog(req.body); 
    const SaveBlog = await blog.save();
    res.json(201, SaveBlog);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

// get single blog api
const getSingleBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findOne({ _id: id });
    res.json(blog);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

// delete single blog api
const deleteBlog = async (req, res) => {
  try {
    const _id = req.params.id;
    const blog = await Blog.deleteOne({ _id });
    res.json(blog);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

// update blog api
const updateBlog = async (req, res) => {
  try {
    const _id = req.params.id;
    const blogInfo = req.body;
    const updateData = await Blog.updateOne(
      { _id },
      {
        title: blogInfo.title,
        description: blogInfo.description,
        image: blogInfo.image,
      },
      {
        new: true,
      }
    );
    res.json(updateData);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

module.exports = {
  getSingleBlog,
  getBlogs,
  postBlog,
  updateBlog,
  deleteBlog,
};
