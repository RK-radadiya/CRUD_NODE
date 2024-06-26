const history = require("../model/history_model")

const creat_history_s = (data) => { 
    return history.create(data)

}

const delete_history = (id) => {
    return history.findByIdAndDelete(id)
    
}

const get_history_s = () => {
    return history.find()
}
module.exports = {
    creat_history_s,
    delete_history,
    get_history_s
}