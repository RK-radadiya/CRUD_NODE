

const express = require('express');

const mongoose = require('mongoose');

const biography_Scheema = mongoose.Schema(
    {
        biography_name: {
            type: String,
            trim: true,
        },
        biography_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const biography = mongoose.model('biography', biography_Scheema)

module.exports = biography