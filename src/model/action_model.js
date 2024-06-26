

const express = require('express');

const mongoose = require('mongoose');

const action_Scheema = mongoose.Schema(
    {
        action_name: {
            type: String,
            trim: true,
        },
        action_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const action = mongoose.model('action', action_Scheema)

module.exports = action