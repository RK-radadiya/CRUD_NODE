

const express = require('express');
const { action_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_action",
    action_controller.creat_action
)


router.delete(
    "/delete/:id",
    action_controller.delete_action
)


router.get(
    "/get-action",
    action_controller.get_action_c
)

module.exports = router