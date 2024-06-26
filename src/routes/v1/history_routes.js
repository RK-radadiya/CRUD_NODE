

const express = require('express');
const { history_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_history",
    history_controller.creat_history
)


router.delete(
    "/delete/:id",
    history_controller.delete_history
)


router.get(
    "/get-history",
    history_controller.get_history_c
)

module.exports = router