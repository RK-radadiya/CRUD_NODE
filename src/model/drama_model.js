

const express = require('express');

const mongoose = require('mongoose');

const drama_Scheema = mongoose.Schema(
    {
        drama_name: {
            type: String,
            trim: true,
        },
        drama_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const drama = mongoose.model('drama', drama_Scheema)

module.exports = drama