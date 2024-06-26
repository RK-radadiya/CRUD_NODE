

const express = require('express');
const { adventure_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_adventure",
    adventure_controller.creat_adventure
)


router.delete(
    "/delete/:id",
    adventure_controller.delete_adventure
)


router.get(
    "/get-adventure",
    adventure_controller.get_adventure_c
)

module.exports = router