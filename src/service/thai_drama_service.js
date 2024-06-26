const thai_drama = require("../model/thai_drama_model")

const creat_thai_drama_s = (data) => { 
    return thai_drama.create(data)

}

const delete_thai_drama = (id) => {
    return thai_drama.findByIdAndDelete(id)
    
}

const get_thai_drama_s = () => {
    return thai_drama.find()
}
module.exports = {
    creat_thai_drama_s,
    delete_thai_drama,
    get_thai_drama_s
}