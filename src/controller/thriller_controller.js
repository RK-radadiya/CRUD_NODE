const { thriller_service } = require("../service");



const creat_thriller = async(req, res) => {
    try {
        const data = req.body

        const new_thriller = await thriller_service.creat_thriller_s(data);
        res.status(200).json({  
            message: "thriller created successfully",
            success: true,
            data: new_thriller
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_thriller = async(req, res) => {
    try {

        const id = req.params.id
        const result = await thriller_service.delete_thriller(id)

        res.status(200).json({  
            message: "thriller deleted successfully",
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

const get_thriller_c =async(req, res) => {
    try {
        const thriller_list = await thriller_service.get_thriller_s()
        if(!thriller_list) {
            throw new Error("thriller list not found")
        }
        res.status(200).json({
            message: "thriller list",
            success: true,
            data: thriller_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_thriller,
    delete_thriller,
    get_thriller_c
}