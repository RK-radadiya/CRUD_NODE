

const express = require('express');

const mongoose = require('mongoose');

const documentary_Scheema = mongoose.Schema(
    {
        documentary_name: {
            type: String,
            trim: true,
        },
        documentary_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const documentary = mongoose.model('Documentary', documentary_Scheema)

module.exports = documentary