

const express = require('express');

const mongoose = require('mongoose');

const musical_Scheema = mongoose.Schema(
    {
        musical_name: {
            type: String,
            trim: true,
        },
        musical_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const musical = mongoose.model('musical', musical_Scheema)

module.exports = musical