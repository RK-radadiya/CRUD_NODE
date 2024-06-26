const mystery = require("../model/mystery_model")

const creat_mystery_s = (data) => { 
    return mystery.create(data)

}

const delete_mystery = (id) => {
    return mystery.findByIdAndDelete(id)
    
}

const get_mystery_s = () => {
    return mystery.find()
}
module.exports = {
    creat_mystery_s,
    delete_mystery,
    get_mystery_s
}