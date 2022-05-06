const { Schema, model } = require("mongoose");


const movieSchema = new Schema({
    title: {
        type: String
    },
    director: {
        type: String
    },
    stars: {
            type: [String]
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    showtimes: {
            type: [String]
    },
    director: {
        type: String
    }
})


const MovieModel = model("movie", movieSchema)
// movie es el nombre de la coleccion que se guardara en mongoDB

module.exports = MovieModel;
