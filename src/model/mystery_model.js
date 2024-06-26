

const express = require('express');

const mongoose = require('mongoose');

const mystery_Scheema = mongoose.Schema(
    {
        mystery_name: {
            type: String,
            trim: true,
        },
        mystery_rating: {
            type: Number,
            trim: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)


const mystery = mongoose.model('mystery', mystery_Scheema)

module.exports = mystery