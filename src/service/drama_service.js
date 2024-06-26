const drama = require("../model/drama_model")

const creat_drama_s = (data) => { 
    return drama.create(data)

}

const delete_drama = (id) => {
    return drama.findByIdAndDelete(id)
    
}

const get_drama_s = () => {
    return drama.find()
}
module.exports = {
    creat_drama_s,
    delete_drama,
    get_drama_s
}