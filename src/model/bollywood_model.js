

const express = require('express');

const mongoose = require('mongoose');

const bollywood_Scheema = mongoose.Schema(
    {
        bollywood_name: {
            type: String,
            trim: true,
        },
        bollywood_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const bollywood = mongoose.model('bollywood', bollywood_Scheema)

module.exports = bollywood