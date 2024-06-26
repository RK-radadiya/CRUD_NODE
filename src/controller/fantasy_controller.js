const { fantasy_service } = require("../service");



const creat_fantasy = async(req, res) => {
    try {
        const data = req.body

        const new_fantasy = await fantasy_service.creat_fantasy_s(data);
        res.status(200).json({  
            message: "fantasy created successfully",
            success: true,
            data: new_fantasy
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_fantasy = async(req, res) => {
    try {

        const id = req.params.id
        const result = await fantasy_service.delete_fantasy(id)

        res.status(200).json({  
            message: "fantasy deleted successfully",
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

const get_fantasy_c =async(req, res) => {
    try {
        const fantasy_list = await fantasy_service.get_fantasy_s()
        if(!fantasy_list) {
            throw new Error("fantasy list not found")
        }
        res.status(200).json({
            message: "fantasy list",
            success: true,
            data: fantasy_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_fantasy,
    delete_fantasy,
    get_fantasy_c
}