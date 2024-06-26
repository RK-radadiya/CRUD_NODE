

const express = require('express');
const { bollywood_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_bollywood",
    bollywood_controller.creat_bollywood
)


router.delete(
    "/delete/:id",
    bollywood_controller.delete_bollywood
)


router.get(
    "/get-bollywood",
    bollywood_controller.get_bollywood_c
)

module.exports = router