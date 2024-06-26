const turkish_tv_shows = require("../model/turkish_tv_shows_model")

const creat_turkish_tv_shows_s = (data) => { 
    return turkish_tv_shows.create(data)

}

const delete_turkish_tv_shows = (id) => {
    return turkish_tv_shows.findByIdAndDelete(id)
    
}

const get_turkish_tv_shows_s = () => {
    return turkish_tv_shows.find()
}
module.exports = {
    creat_turkish_tv_shows_s,
    delete_turkish_tv_shows,
    get_turkish_tv_shows_s
}