const war = require("../model/war_model")

const creat_war_s = (data) => { 
    return war.create(data)

}

const delete_war = (id) => {
    return war.findByIdAndDelete(id)
    
}

const get_war_s = () => {
    return war.find()
}
module.exports = {
    creat_war_s,
    delete_war,
    get_war_s
}