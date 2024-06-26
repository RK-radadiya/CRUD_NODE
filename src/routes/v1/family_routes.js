

const express = require('express');
const { family_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_family",
    family_controller.creat_family
)


router.delete(
    "/delete/:id",
    family_controller.delete_family
)


router.get(
    "/get-family",
    family_controller.get_family_c
)

module.exports = router