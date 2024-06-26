

const express = require('express');
const { crime_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_crime",
    crime_controller.creat_crime
)


router.delete(
    "/delete/:id",
    crime_controller.delete_crime
)


router.get(
    "/get-crime",
    crime_controller.get_crime_c
)

module.exports = router