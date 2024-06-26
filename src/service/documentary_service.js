const documentary = require("../model/documentary_model")

const creat_documentary_s = (data) => { 
    return documentary.create(data)

}

const delete_documentary = (id) => {
    return documentary.findByIdAndDelete(id)
    
}

const get_documentary_s = () => {
    return documentary.find()
}
module.exports = {
    creat_documentary_s,
    delete_documentary,
    get_documentary_s
}