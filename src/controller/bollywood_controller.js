const { bollywood_service } = require("../service");



const creat_bollywood = async(req, res) => {
    try {
        const data = req.body

        const new_bollywood = await bollywood_service.creat_bollywood_s(data);
        res.status(200).json({  
            message: "bollywood created successfully",
            success: true,
            data: new_bollywood
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_bollywood = async(req, res) => {
    try {

        const id = req.params.id
        const result = await bollywood_service.delete_bollywood(id)

        res.status(200).json({  
            message: "bollywood deleted successfully",
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

const get_bollywood_c =async(req, res) => {
    try {
        const bollywood_list = await bollywood_service.get_bollywood_s()
        if(!bollywood_list) {
            throw new Error("bollywood list not found")
        }
        res.status(200).json({
            message: "bollywood list",
            success: true,
            data: bollywood_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_bollywood,
    delete_bollywood,
    get_bollywood_c
}