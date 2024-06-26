const { action_service } = require("../service");



const creat_action = async(req, res) => {
    try {
        const data = req.body

        const new_action = await action_service.creat_action_s(data);
        res.status(200).json({  
            message: "action created successfully",
            success: true,
            data: new_action
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_action = async(req, res) => {
    try {

        const id = req.params.id
        const result = await action_service.delete_action(id)

        res.status(200).json({  
            message: "action deleted successfully",
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

const get_action_c =async(req, res) => {
    try {
        const action_list = await action_service.get_action_s()
        if(!action_list) {
            throw new Error("action list not found")
        }
        res.status(200).json({
            message: "action list",
            success: true,
            data: action_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_action,
    delete_action,
    get_action_c
}