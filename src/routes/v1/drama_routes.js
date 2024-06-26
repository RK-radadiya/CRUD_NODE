

const express = require('express');
const { drama_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_drama",
    drama_controller.creat_drama
)


router.delete(
    "/delete/:id",
    drama_controller.delete_drama
)


router.get(
    "/get-drama",
    drama_controller.get_drama_c
)

module.exports = router