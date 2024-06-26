

const express = require('express');

const mongoose = require('mongoose');

const tv_shows_Scheema = mongoose.Schema(
    {
        tv_shows_name: {
            type: String,
            trim: true,
        },
        tv_shows_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const tv_shows = mongoose.model('tv_shows', tv_shows_Scheema)

module.exports = tv_shows