

const express = require('express');
const { fantasy_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_fantasy",
    fantasy_controller.creat_fantasy
)


router.delete(
    "/delete/:id",
    fantasy_controller.delete_fantasy
)


router.get(
    "/get-fantasy",
    fantasy_controller.get_fantasy_c
)

module.exports = router