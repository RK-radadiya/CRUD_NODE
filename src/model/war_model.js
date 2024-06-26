

const express = require('express');

const mongoose = require('mongoose');

const war_Scheema = mongoose.Schema(
    {
        war_name: {
            type: String,
            trim: true,
        },
        war_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const war = mongoose.model('war', war_Scheema)

module.exports = war