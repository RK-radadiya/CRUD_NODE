

const express = require('express');
const { documentary_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_documentary",
    documentary_controller.creat_documentary
)


router.delete(
    "/delete/:id",
    documentary_controller.delete_documentary
)


router.get(
    "/get-documentary",
    documentary_controller.get_documentary_c
)

module.exports = router