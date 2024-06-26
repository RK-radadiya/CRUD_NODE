const comedy = require("../model/comedy_model")

const creat_comedy_s = (data) => { 
    return comedy.create(data)

}

const delete_comedy = (id) => {
    return comedy.findByIdAndDelete(id)
    
}

const get_comedy_s = () => {
    return comedy.find()
}
module.exports = {
    creat_comedy_s,
    delete_comedy,
    get_comedy_s
}