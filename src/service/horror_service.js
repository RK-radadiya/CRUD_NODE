const horror = require("../model/horror_model")

const creat_horror_s = (data) => { 
    return horror.create(data)

}

const delete_horror = (id) => {
    return horror.findByIdAndDelete(id)
    
}

const get_horror_s = () => {
    return horror.find()
}
module.exports = {
    creat_horror_s,
    delete_horror,
    get_horror_s
}