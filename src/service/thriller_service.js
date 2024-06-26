const thriller = require("../model/thriller_model")

const creat_thriller_s = (data) => { 
    return thriller.create(data)

}

const delete_thriller = (id) => {
    return thriller.findByIdAndDelete(id)
    
}

const get_thriller_s = () => {
    return thriller.find()
}
module.exports = {
    creat_thriller_s,
    delete_thriller,
    get_thriller_s
}