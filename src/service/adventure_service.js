const adventure = require("../model/adventure_model")

const creat_adventure_s = (data) => {
    return adventure.create(data)

}

const delete_adventure = (id) => {
    return adventure.findByIdAndDelete(id)

}

const get_adventure_s = () => {
    return adventure.find()
}
module.exports = {
    creat_adventure_s,
    delete_adventure,
    get_adventure_s
}