const mongoose = require("mongoose");
const db = `mongodb+srv://blog_site:wgHE1Zaq6JfLQS0g@cluster0.deaij.mongodb.net/blogs?retryWrites=true&w=majority`;
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("connection successfull");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

module.exports = connectDB;
