

const express = require('express');

const mongoose = require('mongoose');

const crime_Scheema = mongoose.Schema(
    {
        crime_name: {
            type: String,
            trim: true,
        },
        crime_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const crime = mongoose.model('crime', crime_Scheema)

module.exports = crime