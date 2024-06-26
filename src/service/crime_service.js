const crime = require("../model/crime_model")

const creat_crime_s = (data) => { 
    return crime.create(data)

}

const delete_crime = (id) => {
    return crime.findByIdAndDelete(id)
    
}

const get_crime_s = () => {
    return crime.find()
}
module.exports = {
    creat_crime_s,
    delete_crime,
    get_crime_s
}