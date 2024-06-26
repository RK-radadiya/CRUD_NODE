const biography = require("../model/biography_model")

const creat_biography_s = (data) => { 
    return biography.create(data)

}

const delete_biography = (id) => {
    return biography.findByIdAndDelete(id)
    
}

const get_biography_s = () => {
    return biography.find()
}
module.exports = {
    creat_biography_s,
    delete_biography,
    get_biography_s
}