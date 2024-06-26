const fantasy = require("../model/fantasy_model")

const creat_fantasy_s = (data) => { 
    return fantasy.create(data)

}

const delete_fantasy = (id) => {
    return fantasy.findByIdAndDelete(id)
    
}

const get_fantasy_s = () => {
    return fantasy.find()
}
module.exports = {
    creat_fantasy_s,
    delete_fantasy,
    get_fantasy_s
}