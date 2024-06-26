const { drama_service } = require("../service");



const creat_drama = async(req, res) => {
    try {
        const data = req.body

        const new_drama = await drama_service.creat_drama_s(data);
        res.status(200).json({  
            message: "drama created successfully",
            success: true,
            data: new_drama
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_drama = async(req, res) => {
    try {

        const id = req.params.id
        const result = await drama_service.delete_drama(id)

        res.status(200).json({  
            message: "drama deleted successfully",
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

const get_drama_c =async(req, res) => {
    try {
        const drama_list = await drama_service.get_drama_s()
        if(!drama_list) {
            throw new Error("drama list not found")
        }
        res.status(200).json({
            message: "drama list",
            success: true,
            data: drama_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_drama,
    delete_drama,
    get_drama_c
}