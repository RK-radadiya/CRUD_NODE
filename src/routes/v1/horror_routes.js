

const express = require('express');
const { horror_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_horror",
    horror_controller.creat_horror
)


router.delete(
    "/delete/:id",
    horror_controller.delete_horror
)


router.get(
    "/get-horror",
    horror_controller.get_horror_c
)

module.exports = router