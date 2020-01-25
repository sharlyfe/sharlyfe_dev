const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogsSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Blog = mongoose.model("Blog", blogsSchema);
module.exports = Blog;
