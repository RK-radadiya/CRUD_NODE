

const express = require('express');
const { tv_shows_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_tv_shows",
    tv_shows_controller.creat_tv_shows
)


router.delete(
    "/delete/:id",
    tv_shows_controller.delete_tv_shows
)


router.get(
    "/get-tv_shows",
    tv_shows_controller.get_tv_shows_c
)

module.exports = router