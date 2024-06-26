const { documentary_service } = require("../service");



const creat_documentary = async(req, res) => {
    try {
        const data = req.body

        const new_documentary = await documentary_service.creat_documentary_s(data);
        res.status(200).json({  
            message: "Documentary created successfully",
            success: true,
            data: new_documentary
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_documentary = async(req, res) => {
    try {

        const id = req.params.id
        const result = await documentary_service.delete_documentary(id)

        res.status(200).json({  
            message: "Documentary deleted successfully",
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

const get_documentary_c =async(req, res) => {
    try {
        const documentary_list = await documentary_service.get_documentary_s()
        if(!documentary_list) {
            throw new Error("Documentary list not found")
        }
        res.status(200).json({
            message: "Documentary list",
            success: true,
            data: documentary_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_documentary,
    delete_documentary,
    get_documentary_c
}