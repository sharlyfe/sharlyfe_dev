// define express router
const router = require("express").Router();
// define our model mongoose model that we created
let User = require("../models/user.model");
// this is our first rout and handles hhtp get request
router.route("/").get((req, res) => {
  // this is mongo method that going to give all
  // users from mongo db and results are in json
  // format
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error" + err));
});
// the second endpoint will handle http post request
// if has / add on the end then will hand;le those
router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUSer = new User({ username });
  // this will save new user to data abse by using
  // .save method
  newUSer
    .save()
    .then(() => res.json(" User Added!"))
    .catch(err => res.status(400).json("Error:" + err));
});
// exporting router
module.exports = router;
