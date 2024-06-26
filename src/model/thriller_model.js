

const express = require('express');

const mongoose = require('mongoose');

const thriller_Scheema = mongoose.Schema(
    {
        thriller_name: {
            type: String,
            trim: true,
        },
        thriller_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const thriller = mongoose.model('thriller', thriller_Scheema)

module.exports = thriller