

const express = require('express');
const { romance_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_romance",
    romance_controller.creat_romance
)


router.delete(
    "/delete/:id",
    romance_controller.delete_romance
)


router.get(
    "/get-romance",
    romance_controller.get_romance_c
)

module.exports = router