

const express = require('express');

const mongoose = require('mongoose');

const sport_Scheema = mongoose.Schema(
    {
        sport_name: {
            type: String,
            trim: true,
        },
        sport_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const sport = mongoose.model('sport', sport_Scheema)

module.exports = sport