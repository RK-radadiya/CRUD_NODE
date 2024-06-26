
const express = require('express');
const { series_controller } = require('../../controller');

const router = express.Router();

router.post(
    "/create_series",
    series_controller.create_series
)


router.put(
    "/update-series/:series_id",
    series_controller.update_series
)


module.exports = router