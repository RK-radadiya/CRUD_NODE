const foreign = require("../model/foreign_model")

const creat_foreign_s = (data) => { 
    return foreign.create(data)

}

const delete_foreign = (id) => {
    return foreign.findByIdAndDelete(id)
    
}

const get_foreign_s = () => {
    return foreign.find()
}
module.exports = {
    creat_foreign_s,
    delete_foreign,
    get_foreign_s
}