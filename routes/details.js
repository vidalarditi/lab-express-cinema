const express = require('express');
const router  = express.Router();
const Movies = require("../models/Movies")

/* GET home page */
router.get('/movie/:id', (req, res, next) => {
  const movieId = req.params.id;
  Movies.findOne({_id : movieId}, (err, movie) => {
    if(err) throw err;
    res.render("details", {movie:movie})
  })
  
});


module.exports = router;

