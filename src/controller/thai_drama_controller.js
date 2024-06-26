const { thai_drama_service } = require("../service");



const creat_thai_drama = async(req, res) => {
    try {
        const data = req.body

        const new_thai_drama = await thai_drama_service.creat_thai_drama_s(data);
        res.status(200).json({  
            message: "thai_drama created successfully",
            success: true,
            data: new_thai_drama
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_thai_drama = async(req, res) => {
    try {

        const id = req.params.id
        const result = await thai_drama_service.delete_thai_drama(id)

        res.status(200).json({  
            message: "thai_drama deleted successfully",
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

const get_thai_drama_c =async(req, res) => {
    try {
        const thai_drama_list = await thai_drama_service.get_thai_drama_s()
        if(!thai_drama_list) {
            throw new Error("thai_drama list not found")
        }
        res.status(200).json({
            message: "thai_drama list",
            success: true,
            data: thai_drama_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_thai_drama,
    delete_thai_drama,
    get_thai_drama_c
}