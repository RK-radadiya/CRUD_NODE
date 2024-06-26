const { mystery_service } = require("../service");



const creat_mystery = async(req, res) => {
    try {
        const data = req.body

        const new_mystery = await mystery_service.creat_mystery_s(data);
        res.status(200).json({  
            message: "mystery created successfully",
            success: true,
            data: new_mystery
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_mystery = async(req, res) => {
    try {

        const id = req.params.id
        const result = await mystery_service.delete_mystery(id)

        res.status(200).json({  
            message: "mystery deleted successfully",
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

const get_mystery_c =async(req, res) => {
    try {
        const mystery_list = await mystery_service.get_mystery_s()
        if(!mystery_list) {
            throw new Error("mystery list not found")
        }
        res.status(200).json({
            message: "mystery list",
            success: true,
            data: mystery_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_mystery,
    delete_mystery,
    get_mystery_c
}