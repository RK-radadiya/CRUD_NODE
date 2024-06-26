const { biography_service } = require("../service");



const creat_biography = async(req, res) => {
    try {
        const data = req.body

        const new_biography = await biography_service.creat_biography_s(data);
        res.status(200).json({  
            message: "biography created successfully",
            success: true,
            data: new_biography
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_biography = async(req, res) => {
    try {

        const id = req.params.id
        const result = await biography_service.delete_biography(id)

        res.status(200).json({  
            message: "biography deleted successfully",
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

const get_biography_c =async(req, res) => {
    try {
        const biography_list = await biography_service.get_biography_s()
        if(!biography_list) {
            throw new Error("biography list not found")
        }
        res.status(200).json({
            message: "biography list",
            success: true,
            data: biography_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_biography,
    delete_biography,
    get_biography_c
}