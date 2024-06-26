const { family_service } = require("../service");



const creat_family = async(req, res) => {
    try {
        const data = req.body

        const new_family = await family_service.creat_family_s(data);
        res.status(200).json({  
            message: "family created successfully",
            success: true,
            data: new_family
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_family = async(req, res) => {
    try {

        const id = req.params.id
        const result = await family_service.delete_family(id)

        res.status(200).json({  
            message: "family deleted successfully",
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

const get_family_c =async(req, res) => {
    try {
        const family_list = await family_service.get_family_s()
        if(!family_list) {
            throw new Error("family list not found")
        }
        res.status(200).json({
            message: "family list",
            success: true,
            data: family_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_family,
    delete_family,
    get_family_c
}