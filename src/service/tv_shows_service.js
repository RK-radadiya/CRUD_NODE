const tv_shows = require("../model/tv_shows_model")

const creat_tv_shows_s = (data) => { 
    return tv_shows.create(data)

}

const delete_tv_shows = (id) => {
    return tv_shows.findByIdAndDelete(id)
    
}

const get_tv_shows_s = () => {
    return tv_shows.find()
}
module.exports = {
    creat_tv_shows_s,
    delete_tv_shows,
    get_tv_shows_s
}