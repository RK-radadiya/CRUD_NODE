const family = require("../model/family_model")

const creat_family_s = (data) => { 
    return family.create(data)

}

const delete_family = (id) => {
    return family.findByIdAndDelete(id)
    
}

const get_family_s = () => {
    return family.find()
}
module.exports = {
    creat_family_s,
    delete_family,
    get_family_s
}