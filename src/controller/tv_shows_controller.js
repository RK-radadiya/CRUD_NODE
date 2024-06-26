const { tv_shows_service } = require("../service");



const creat_tv_shows = async(req, res) => {
    try {
        const data = req.body

        const new_tv_shows = await tv_shows_service.creat_tv_shows_s(data);
        res.status(200).json({  
            message: "tv_shows created successfully",
            success: true,
            data: new_tv_shows
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_tv_shows = async(req, res) => {
    try {

        const id = req.params.id
        const result = await tv_shows_service.delete_tv_shows(id)

        res.status(200).json({  
            message: "tv_shows deleted successfully",
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

const get_tv_shows_c =async(req, res) => {
    try {
        const tv_shows_list = await tv_shows_service.get_tv_shows_s()
        if(!tv_shows_list) {
            throw new Error("tv_shows list not found")
        }
        res.status(200).json({
            message: "tv_shows list",
            success: true,
            data: tv_shows_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_tv_shows,
    delete_tv_shows,
    get_tv_shows_c
}