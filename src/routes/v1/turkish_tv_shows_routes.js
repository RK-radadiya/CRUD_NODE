

const express = require('express');
const { turkish_tv_shows_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_turkish_tv_shows",
    turkish_tv_shows_controller.creat_turkish_tv_shows
)


router.delete(
    "/delete/:id",
    turkish_tv_shows_controller.delete_turkish_tv_shows
)


router.get(
    "/get-turkish_tv_shows",
    turkish_tv_shows_controller.get_turkish_tv_shows_c
)

module.exports = router