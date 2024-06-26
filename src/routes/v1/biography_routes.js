

const express = require('express');
const { biography_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_biography",
    biography_controller.creat_biography
)


router.delete(
    "/delete/:id",
    biography_controller.delete_biography
)


router.get(
    "/get-biography",
    biography_controller.get_biography_c
)

module.exports = router