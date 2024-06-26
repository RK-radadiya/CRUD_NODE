const musical = require("../model/musical_model")

const creat_musical_s = (data) => { 
    return musical.create(data)

}

const delete_musical = (id) => {
    return musical.findByIdAndDelete(id)
    
}

const get_musical_s = () => {
    return musical.find()
}
module.exports = {
    creat_musical_s,
    delete_musical,
    get_musical_s
}