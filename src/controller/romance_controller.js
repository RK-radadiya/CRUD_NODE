const { romance_service } = require("../service");



const creat_romance = async(req, res) => {
    try {
        const data = req.body

        const new_romance = await romance_service.creat_romance_s(data);
        res.status(200).json({  
            message: "romance created successfully",
            success: true,
            data: new_romance
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_romance = async(req, res) => {
    try {

        const id = req.params.id
        const result = await romance_service.delete_romance(id)

        res.status(200).json({  
            message: "romance deleted successfully",
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

const get_romance_c =async(req, res) => {
    try {
        const romance_list = await romance_service.get_romance_s()
        if(!romance_list) {
            throw new Error("romance list not found")
        }
        res.status(200).json({
            message: "romance list",
            success: true,
            data: romance_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_romance,
    delete_romance,
    get_romance_c
}