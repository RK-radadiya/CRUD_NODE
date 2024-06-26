const { history_service } = require("../service");



const creat_history = async(req, res) => {
    try {
        const data = req.body

        const new_history = await history_service.creat_history_s(data);
        res.status(200).json({  
            message: "history created successfully",
            success: true,
            data: new_history
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_history = async(req, res) => {
    try {

        const id = req.params.id
        const result = await history_service.delete_history(id)

        res.status(200).json({  
            message: "history deleted successfully",
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

const get_history_c =async(req, res) => {
    try {
        const history_list = await history_service.get_history_s()
        if(!history_list) {
            throw new Error("history list not found")
        }
        res.status(200).json({
            message: "history list",
            success: true,
            data: history_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_history,
    delete_history,
    get_history_c
}