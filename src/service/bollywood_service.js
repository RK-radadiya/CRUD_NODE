const bollywood = require("../model/bollywood_model")

const creat_bollywood_s = (data) => { 
    return bollywood.create(data)

}

const delete_bollywood = (id) => {
    return bollywood.findByIdAndDelete(id)
    
}

const get_bollywood_s = () => {
    return bollywood.find()
}
module.exports = {
    creat_bollywood_s,
    delete_bollywood,
    get_bollywood_s
}