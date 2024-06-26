const { foreign_service } = require("../service");



const creat_foreign = async(req, res) => {
    try {
        const data = req.body

        const new_foreign = await foreign_service.creat_foreign_s(data);
        res.status(200).json({  
            message: "foreign created successfully",
            success: true,
            data: new_foreign
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_foreign = async(req, res) => {
    try {

        const id = req.params.id
        const result = await foreign_service.delete_foreign(id)

        res.status(200).json({  
            message: "foreign deleted successfully",
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

const get_foreign_c =async(req, res) => {
    try {
        const foreign_list = await foreign_service.get_foreign_s()
        if(!foreign_list) {
            throw new Error("foreign list not found")
        }
        res.status(200).json({
            message: "foreign list",
            success: true,
            data: foreign_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_foreign,
    delete_foreign,
    get_foreign_c
}