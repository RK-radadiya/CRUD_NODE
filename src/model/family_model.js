

const express = require('express');

const mongoose = require('mongoose');

const family_Scheema = mongoose.Schema(
    {
        family_name: {
            type: String,
            trim: true,
        },
        family_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const family = mongoose.model('family', family_Scheema)

module.exports = family