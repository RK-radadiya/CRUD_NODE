

const express = require('express');
const { comedy_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_comedy",
    comedy_controller.creat_comedy
)


router.delete(
    "/delete/:id",
    comedy_controller.delete_comedy
)


router.get(
    "/get-comedy",
    comedy_controller.get_comedy_c
)

module.exports = router