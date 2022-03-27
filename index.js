const express = require("express");
const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const blogRoute = require("./routes/blogRoute");

// connectDB
connectDB();

// internal middleware
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("In the name of Allah");
});

// get all blog api
app.use("/blogs", blogRoute);
app.listen(PORT, () => {
  console.log(`Server running port is ${PORT}`);
});
