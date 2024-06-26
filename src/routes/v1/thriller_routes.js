

const express = require('express');
const { thriller_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_thriller",
    thriller_controller.creat_thriller
)


router.delete(
    "/delete/:id",
    thriller_controller.delete_thriller
)


router.get(
    "/get-thriller",
    thriller_controller.get_thriller_c
)

module.exports = router