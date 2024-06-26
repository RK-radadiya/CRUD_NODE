

const express = require('express');
const { foreign_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_foreign",
    foreign_controller.creat_foreign
)


router.delete(
    "/delete/:id",
    foreign_controller.delete_foreign
)


router.get(
    "/get-foreign",
    foreign_controller.get_foreign_c
)

module.exports = router