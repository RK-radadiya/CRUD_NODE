

const create_movie  = async (req, res) => {
    try {
        const new_movie = await Movie_service.create_movie_s(req.body);     
        res.status(201).json({
            message: "Movie created successfully",
            success: true,
            data: movie
        })  
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}   

module.exports = {
    create_movie,
}