

const express = require('express');

const router = express.Router();

router.post(
    "/list",
    (req, res) => {
       res.status(200).json({
           message: "List of movies",
           success: true
       })
    })

module.exports = router  