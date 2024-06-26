const sport = require("../model/sport_model")

const creat_sport_s = (data) => { 
    return sport.create(data)

}

const delete_sport = (id) => {
    return sport.findByIdAndDelete(id)
    
}

const get_sport_s = () => {
    return sport.find()
}
module.exports = {
    creat_sport_s,
    delete_sport,
    get_sport_s
}