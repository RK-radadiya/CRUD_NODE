const { war_service } = require("../service");



const creat_war = async(req, res) => {
    try {
        const data = req.body

        const new_war = await war_service.creat_war_s(data);
        res.status(200).json({  
            message: "war created successfully",
            success: true,
            data: new_war
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_war = async(req, res) => {
    try {

        const id = req.params.id
        const result = await war_service.delete_war(id)

        res.status(200).json({  
            message: "war deleted successfully",
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

const get_war_c =async(req, res) => {
    try {
        const war_list = await war_service.get_war_s()
        if(!war_list) {
            throw new Error("war list not found")
        }
        res.status(200).json({
            message: "war list",
            success: true,
            data: war_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_war,
    delete_war,
    get_war_c
}