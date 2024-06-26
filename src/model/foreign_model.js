

const express = require('express');

const mongoose = require('mongoose');

const foreign_Scheema = mongoose.Schema(
    {
        foreign_name: {
            type: String,
            trim: true,
        },
        foreign_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const foreign = mongoose.model('foreign', foreign_Scheema)

module.exports = foreign