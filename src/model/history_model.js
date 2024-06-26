

const express = require('express');

const mongoose = require('mongoose');

const history_Scheema = mongoose.Schema(
    {
        history_name: {
            type: String,
            trim: true,
        },
        history_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const history = mongoose.model('history', history_Scheema)

module.exports = history