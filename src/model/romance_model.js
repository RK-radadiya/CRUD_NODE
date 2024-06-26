

const express = require('express');

const mongoose = require('mongoose');

const romance_Scheema = mongoose.Schema(
    {
        romance_name: {
            type: String,
            trim: true,
        },
        romance_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const romance = mongoose.model('romance', romance_Scheema)

module.exports = romance