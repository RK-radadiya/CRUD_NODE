

const express = require('express');

const mongoose = require('mongoose');

const comedy_Scheema = mongoose.Schema(
    {
        comedy_name: {
            type: String,
            trim: true,
        },
        comedy_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const comedy = mongoose.model('comedy', comedy_Scheema)

module.exports = comedy