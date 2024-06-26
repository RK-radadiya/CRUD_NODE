

const express = require('express');

const mongoose = require('mongoose');

const horror_Scheema = mongoose.Schema(
    {
        horror_name: {
            type: String,
            trim: true,
        },
        horror_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const horror = mongoose.model('horror', horror_Scheema)

module.exports = horror