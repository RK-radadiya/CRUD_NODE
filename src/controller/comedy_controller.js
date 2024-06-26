const { comedy_service } = require("../service");



const creat_comedy = async(req, res) => {
    try {
        const data = req.body

        const new_comedy = await comedy_service.creat_comedy_s(data);
        res.status(200).json({  
            message: "comedy created successfully",
            success: true,
            data: new_comedy
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_comedy = async(req, res) => {
    try {

        const id = req.params.id
        const result = await comedy_service.delete_comedy(id)

        res.status(200).json({  
            message: "comedy deleted successfully",
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

const get_comedy_c =async(req, res) => {
    try {
        const comedy_list = await comedy_service.get_comedy_s()
        if(!comedy_list) {
            throw new Error("comedy list not found")
        }
        res.status(200).json({
            message: "comedy list",
            success: true,
            data: comedy_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_comedy,
    delete_comedy,
    get_comedy_c
}