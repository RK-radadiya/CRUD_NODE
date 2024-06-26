
const { adventure_service } = require("../service")


const creat_adventure = async(req, res) => {
    try {
        const data = req.body

        const new_adventure = await adventure_service.creat_adventure_s(data);
        res.status(200).json({  
            message: "adventure created successfully",
            success: true,
            data: new_adventure
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_adventure = async(req, res) => {
    try {

        const id = req.params.id
        const result = await adventure_service.delete_adventure(id)

        res.status(200).json({  
            message: "Adventure deleted successfully",
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

const get_adventure_c =async(req, res) => {
    try {
        const adventure_list = await adventure_service.get_adventure_s()
        if(!adventure_list) {
            throw new Error("adventure list not found")
        }
        res.status(200).json({
            message: "adventure list",
            success: true,
            data: adventure_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_adventure,
    delete_adventure,
    get_adventure_c
}