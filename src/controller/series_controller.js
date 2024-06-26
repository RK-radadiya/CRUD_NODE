const { series_service } = require("../service");


const create_series  = async(req, res) => {
    try {

        const data = req.body

        const new_series = await series_service.create_series_s(data);     
        res.status(200).json({
            message: "Series created successfully",
            success: true,
            data: new_series
        })  
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}


const update_series = async(req, res) => {
    try {   
        const id = req.params.series_id
        const data = req.body

        const result = await series_service.update_series_s(id, data)

        if(!result) {
            throw new Error("Series not found")
        }

        res.status(200).json({
            message: "Series updated successfully",
            success: true,
            data: data
        })
    } 
    catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

module.exports = {
    create_series,
    update_series
}