const { sport_service } = require("../service");



const creat_sport = async(req, res) => {
    try {
        const data = req.body

        const new_sport = await sport_service.creat_sport_s(data);
        res.status(200).json({  
            message: "sport created successfully",
            success: true,
            data: new_sport
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_sport = async(req, res) => {
    try {

        const id = req.params.id
        const result = await sport_service.delete_sport(id)

        res.status(200).json({  
            message: "sport deleted successfully",
            success: true,
            result
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}

const get_sport_c =async(req, res) => {
    try {
        const sport_list = await sport_service.get_sport_s()
        if(!sport_list) {
            throw new Error("sport list not found")
        }
        res.status(200).json({
            message: "sport list",
            success: true,
            data: sport_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_sport,
    delete_sport,
    get_sport_c
}