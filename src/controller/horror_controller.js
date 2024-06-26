const { horror_service } = require("../service");



const creat_horror = async(req, res) => {
    try {
        const data = req.body

        const new_horror = await horror_service.creat_horror_s(data);
        res.status(200).json({  
            message: "horror created successfully",
            success: true,
            data: new_horror
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_horror = async(req, res) => {
    try {

        const id = req.params.id
        const result = await horror_service.delete_horror(id)

        res.status(200).json({  
            message: "horror deleted successfully",
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

const get_horror_c =async(req, res) => {
    try {
        const horror_list = await horror_service.get_horror_s()
        if(!horror_list) {
            throw new Error("horror list not found")
        }
        res.status(200).json({
            message: "horror list",
            success: true,
            data: horror_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_horror,
    delete_horror,
    get_horror_c
}