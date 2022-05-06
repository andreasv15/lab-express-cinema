const express = require('express');
const router = express.Router();
const MovieModel = require("../models/Movie.model.js");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req,res) => {
    // sacar los datos
    MovieModel.find()
    .then((response) => {
        // renderizar
        res.render("movies.hbs", {
            listMovies: response
        })
    })
    .catch((err) => {
        console.log(err)
    })
})

module.exports = router;
