const express = require('express');
const router  = express.Router();
const Movies = require("../models/Movies")

/* GET home page */
router.get('/movies', (req, res, next) => {
  Movies.find({}, (err, result) => {
    res.render("movies", {movies:result})
  })
});


module.exports = router;