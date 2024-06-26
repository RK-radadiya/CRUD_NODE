

const express = require('express');
const { musical_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_musical",
    musical_controller.creat_musical
)


router.delete(
    "/delete/:id",
    musical_controller.delete_musical
)


router.get(
    "/get-musical",
    musical_controller.get_musical_c
)

module.exports = router