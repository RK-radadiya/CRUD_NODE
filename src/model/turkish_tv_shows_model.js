

const express = require('express');

const mongoose = require('mongoose');

const turkish_tv_shows_Scheema = mongoose.Schema(
    {
        turkish_tv_shows_name: {
            type: String,
            trim: true,
        },
        turkish_tv_shows_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const turkish_tv_shows = mongoose.model('turkish_tv_shows', turkish_tv_shows_Scheema)

module.exports = turkish_tv_shows