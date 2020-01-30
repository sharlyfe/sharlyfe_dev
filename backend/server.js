// import express
const express = require("express");
//import cors for middleware
const cors = require("cors");
// import dotenv for environment variables
// this will help us to connect to our mongoose db
const mongoose = require("mongoose");
require("dotenv").config();

// the following two lines is how we are going to create our express
// server
const app = express();
const port = process.env.PORT || 5000;
// this is our cors middle ware
app.use(cors());
// this is allow us to parse json sending and receiving
app.use(express.json());
// start listening on certain port

// now we set the connection to our mongoose

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo DB database connection established successfully");
});

//we created models and we created routes for that
// inn order that api can do crud so we need to
// specify it here

// importing
const blogsRouter = require("./routes/blogs");
const usersRouter = require("./routes/users");

// now we use them

app.use("/blogs", blogsRouter);
app.use("/users", usersRouter);

// using

app.listen(port, () => {
  console.log(`server is runing on port : ${port}`);
});
