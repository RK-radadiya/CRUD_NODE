

const express = require('express');

const mongoose = require('mongoose');

const fantasy_Scheema = mongoose.Schema(
    {
        fantasy_name: {
            type: String,
            trim: true,
        },
        fantasy_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const fantasy = mongoose.model('fantasy', fantasy_Scheema)

module.exports = fantasy