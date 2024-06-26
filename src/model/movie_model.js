


const mongoose = require('mongoose');

const movie_Scheema = mongoose.Schema(
    {
        movie_name: {
            type: String,
            trim: true,
        },
        movie_rating: {
            type: Number,
            trim: true,
        }   
    },
    {
        timestamps: true
    }
)

const movie = mongoose.model('Movie', movie_Scheema)

module.exports = movie