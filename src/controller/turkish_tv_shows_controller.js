const { turkish_tv_shows_service } = require("../service");



const creat_turkish_tv_shows = async(req, res) => {
    try {
        const data = req.body

        const new_turkish_tv_shows = await turkish_tv_shows_service.creat_turkish_tv_shows_s(data);
        res.status(200).json({  
            message: "turkish_tv_shows created successfully",
            success: true,
            data: new_turkish_tv_shows
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_turkish_tv_shows = async(req, res) => {
    try {

        const id = req.params.id
        const result = await turkish_tv_shows_service.delete_turkish_tv_shows(id)

        res.status(200).json({  
            message: "turkish_tv_shows deleted successfully",
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

const get_turkish_tv_shows_c =async(req, res) => {
    try {
        const turkish_tv_shows_list = await turkish_tv_shows_service.get_turkish_tv_shows_s()
        if(!turkish_tv_shows_list) {
            throw new Error("turkish_tv_shows list not found")
        }
        res.status(200).json({
            message: "turkish_tv_shows list",
            success: true,
            data: turkish_tv_shows_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_turkish_tv_shows,
    delete_turkish_tv_shows,
    get_turkish_tv_shows_c
}