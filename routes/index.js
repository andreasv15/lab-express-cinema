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

router.get("/movie/:id", (req, res) => {
    const { id } = req.params;

    MovieModel.findById(id)
    .then((response) => {
        res.render("movieDetails.hbs", {
            movieDetails: response
        })
    })
    .catch((err) => {
        console.log(err)
    })


})



module.exports = router;
