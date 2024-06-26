

const express = require('express');
const { mystery_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_mystery",
    mystery_controller.creat_mystery
)


router.delete(
    "/delete/:id",
    mystery_controller.delete_mystery
)


router.get(
    "/get-mystery",
    mystery_controller.get_mystery_c
)

module.exports = router