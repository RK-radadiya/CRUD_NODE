const action = require("../model/action_model")

const creat_action_s = (data) => { 
    return action.create(data)

}

const delete_action = (id) => {
    return action.findByIdAndDelete(id)
    
}

const get_action_s = () => {
    return action.find()
}
module.exports = {
    creat_action_s,
    delete_action,
    get_action_s
}