

const express = require('express');
const { thai_drama_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_thai_drama",
    thai_drama_controller.creat_thai_drama
)


router.delete(
    "/delete/:id",
    thai_drama_controller.delete_thai_drama
)


router.get(
    "/get-thai_drama",
    thai_drama_controller.get_thai_drama_c
)

module.exports = router