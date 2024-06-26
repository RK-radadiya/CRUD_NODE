

const express = require('express');

const mongoose = require('mongoose');

const adventure_Scheema = mongoose.Schema(
    {
        adventure_name: {
            type: String,
            trim: true,
        },
        adventure_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const adventure = mongoose.model('adventure', adventure_Scheema)

module.exports = adventure