const { musical_service } = require("../service");



const creat_musical = async(req, res) => {
    try {
        const data = req.body

        const new_musical = await musical_service.creat_musical_s(data);
        res.status(200).json({  
            message: "musical created successfully",
            success: true,
            data: new_musical
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_musical = async(req, res) => {
    try {

        const id = req.params.id
        const result = await musical_service.delete_musical(id)

        res.status(200).json({  
            message: "musical deleted successfully",
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

const get_musical_c =async(req, res) => {
    try {
        const musical_list = await musical_service.get_musical_s()
        if(!musical_list) {
            throw new Error("musical list not found")
        }
        res.status(200).json({
            message: "musical list",
            success: true,
            data: musical_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_musical,
    delete_musical,
    get_musical_c
}