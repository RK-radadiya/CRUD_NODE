const { crime_service } = require("../service");



const creat_crime = async(req, res) => {
    try {
        const data = req.body

        const new_crime = await crime_service.creat_crime_s(data);
        res.status(200).json({  
            message: "crime created successfully",
            success: true,
            data: new_crime
        })

    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}   


const delete_crime = async(req, res) => {
    try {

        const id = req.params.id
        const result = await crime_service.delete_crime(id)

        res.status(200).json({  
            message: "crime deleted successfully",
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

const get_crime_c =async(req, res) => {
    try {
        const crime_list = await crime_service.get_crime_s()
        if(!crime_list) {
            throw new Error("crime list not found")
        }
        res.status(200).json({
            message: "crime list",
            success: true,
            data: crime_list
        })
    } catch (error) {
        res.status(400).json({  
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    creat_crime,
    delete_crime,
    get_crime_c
}