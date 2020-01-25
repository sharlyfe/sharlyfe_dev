const router = require("express").Router();
let Blog = require("../models/blog.model");

// get request

router.route("/").get((req, res) => {
  Blog.find()
    .then(Blog => res.json(Blog))
    .catch(err => res.status(400).json("Error:" + err));
});
// post request
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const date = Date.parse(req.body.date);
  const title = req.body.title;
  const author = req.body.author;

  const newBlog = new Blog({
    username,
    description,
    date,
    title,
    author
  });
  newBlog
    .save()
    .then(() => res.json(" Blog added"))
    .catch(err => res.status(400).json("Error:" + err));
});

//GET request with specific ID
// another endpoint is to get the object id that
// mongo created and return info about that blog
router.route("/:id").get((req, res) => {
  Blog.findById(req.params.id)
    .then(Blog => res.json(Blog))
    .catch(err => res.status(400).json("Error" + err));
});

///DELETE REquest

router.route("/:id").delete((req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(() => res.json("Blog Deleted"))
    .catch(err => res.status(400).json("Error" + err));
});
// Update Request

router.route("/update/:id").post((req, res) => {
  Blog.findById(req.params.id)
    .then(Blog => {
      Blog.username = req.body.username;
      Blog.description = req.body.description;
      Blog.date = Date.parse(req.body.date);
      Blog.title = req.body.title;
      Blog.author = req.body.author;

      Blog.save()
        .then(() => res.json(" Blog Updated"))
        .catch(err => res.status(400).json("Error" + err));
    })
    .catch(err => res.status(400).json("Error" + err));
});

module.exports = router;
