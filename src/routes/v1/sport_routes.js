

const express = require('express');
const { sport_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_sport",
    sport_controller.creat_sport
)


router.delete(
    "/delete/:id",
    sport_controller.delete_sport
)


router.get(
    "/get-sport",
    sport_controller.get_sport_c
)

module.exports = router