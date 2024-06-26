

const express = require('express');

const mongoose = require('mongoose');

const thai_drama_Scheema = mongoose.Schema(
    {
        thai_drama_name: {
            type: String,
            trim: true,
        },
        thai_drama_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const thai_drama = mongoose.model('thai_drama', thai_drama_Scheema)

module.exports = thai_drama