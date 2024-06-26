

const mongoose = require('mongoose');

const series_Scheema = mongoose.Schema(
    {
        series_name: {
            type: String,
            trim: true,
        },
        new_key:{
            type: String,
            trim: true,
        },
        series_rating: {
            type: Number,
            trim: true,
        }   
    },
    {
        timestamps: true
    }
)

const series = mongoose.model('Series', series_Scheema)

module.exports = series