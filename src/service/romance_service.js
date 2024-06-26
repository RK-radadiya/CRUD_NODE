const romance = require("../model/romance_model")

const creat_romance_s = (data) => { 
    return romance.create(data)

}

const delete_romance = (id) => {
    return romance.findByIdAndDelete(id)
    
}

const get_romance_s = () => {
    return romance.find()
}
module.exports = {
    creat_romance_s,
    delete_romance,
    get_romance_s
}