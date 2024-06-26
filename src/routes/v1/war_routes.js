

const express = require('express');
const { war_controller } = require('../../controller');

const router = express.Router();

router.post ( 
    "/creat_war",
    war_controller.creat_war
)


router.delete(
    "/delete/:id",
    war_controller.delete_war
)


router.get(
    "/get-war",
    war_controller.get_war_c
)

module.exports = router